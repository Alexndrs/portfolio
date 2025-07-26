import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/posts.json')
            .then((res) => res.json())
            .then(setPosts)
    }, [])


    return <div className="max-w-[900px] mx-auto flex flex-col px-10">
        <h1 className="text-3xl font-bold mb-5">📝 Blog</h1>
        <ul>
            {posts.map((post) => (
                <li key={post.slug} className="mb-4">
                    <Link to={`/blog/${post.slug}`} className="text-xl hover:underline">
                        {post.title}
                    </Link>
                    <p className="text-gray-600">{post.description}</p>
                </li>
            ))}
        </ul>
    </div>
}
