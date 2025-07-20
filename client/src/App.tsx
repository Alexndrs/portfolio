import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from "./components/Nav";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <div className="absolute bottom-5 md:top-5 md:bottom-auto w-full flex justify-center">
        <Nav />
      </div>

      <div className="bg-gradient-to-t from-neutral-900 to-neutral-800 w-full h-screen py-10 md:py-13 text-slate-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}