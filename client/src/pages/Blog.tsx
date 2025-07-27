import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


type Post = {
    slug: string;
    title: string;
    description: string;
    link: string;
};

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        fetch('/posts.json')
            .then((res) => res.json())
            .then(setPosts)
    }, [])


    return <div className="max-w-[900px] mx-auto flex flex-col px-10">
        <h1 className="text-lg mb-5">Here I write about my projects or anything that goes through my mind</h1>
        <ul>
            {posts.map((post) => (
                <Link to={`/blog/${post.slug}`} >
                    <li key={post.slug} className="mb-4 p-4 dark:bg-white/3 bg-black/5 rounded-xl hover:bg-black/8 dark:hover:bg-white/6 transition-colors">
                        <p className="text-base highlight">
                            {post.title}
                        </p>
                        <p>{post.description}</p>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
}
