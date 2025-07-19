import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <Link to="/about" className="text-blue-600 hover:underline">About</Link>
            <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>
        </nav>
    );
}