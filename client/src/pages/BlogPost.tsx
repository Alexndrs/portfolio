import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '../components/codeBlock';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useEffect, useState } from 'react'
import 'highlight.js/styles/github.css'
import 'katex/dist/katex.min.css';
import type { ComponentPropsWithoutRef } from 'react';

type CodeComponentProps = ComponentPropsWithoutRef<'code'> & {
    inline?: boolean;
};

function getRelativeRepoURL(link: string): string {
    //  Extract the Url relatively to the markdown content in the repositoy (same path removing last part .md)
    // ex : https://raw.githubusercontent.com/Alexndrs/pokemon-generator/main/README.md
    // => https://raw.githubusercontent.com/Alexndrs/pokemon-generator/main
    const url = new URL(link);
    const pathParts = url.pathname.split('/');
    pathParts.pop();
    return `${url.origin}${pathParts.join('/')}/`;
}


function rewriteRelativeImagePaths(text: string, relativeURL: string): string {
    // Find the img tags and rewrite their src attributes to be relative to the rawBase URL
    // e.g: if relativeURL is "https://raw.githubusercontent.com/Alexndrs/pokemon-generator/main"
    //  and the text contains <img src="./backend/samples/generated_samples_1700.png" width="76%" alt="Chat demo" />
    // replace the src with "https://raw.githubusercontent.com/Alexndrs/pokemon-generator/main/backend/samples/generated_samples_1700.png"
    return text.replace(/<img\s+src="([^"]+)"\s+[^>]*>/g, (_, src) => {
        const absoluteSrc = new URL(src, relativeURL).href;
        return `<img src="${absoluteSrc}" />`;
    });
}


const BlogPost = () => {
    const { slug } = useParams()
    const [content, setContent] = useState('')


    useEffect(() => {
        fetch('/posts.json')
            .then((res) => res.json())
            .then((posts) => {

                const post = posts.find((p: { slug: string, link: string }) => p.slug === slug);
                console.log('Found post:', post);

                if (!post) {
                    setContent('# 404 - Not Found\nLe post n\'a pas été trouvé.');
                    return;
                }

                const isRemote = post.link.startsWith('http');
                const fetchUrl = isRemote ? post.link : `${import.meta.env.BASE_URL}${post.link}`;

                console.log('Fetching content from:', fetchUrl);

                fetch(fetchUrl)
                    .then((res) => res.text())
                    .then((rawText) => {
                        const relativeUrl = isRemote ? getRelativeRepoURL(post.link) : '';
                        const fixedText = isRemote ? rewriteRelativeImagePaths(rawText, relativeUrl) : rawText;
                        setContent(fixedText);
                    })
                    .catch(() =>
                        setContent('# 404 - Not Found\nLe fichier markdown n\'a pas été trouvé.')
                    );
            });
    }, [slug]);

    return (
        <div className="max-w-[900px] mx-auto flex flex-col px-10 blog-post mb-75">
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeRaw, rehypeKatex]}
                components={{
                    code({ className, children, inline }: CodeComponentProps) {

                        const match = /language-(\w+)/.exec(className || '');
                        const codeContent = String(children).replace(/\n$/, '');

                        if (!inline && match) {
                            return <CodeBlock language={match[1]} value={codeContent} />;
                        }

                        return <code className="bg-gray-800 px-1 rounded">{children}</code>;
                    },
                }}

            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default BlogPost
