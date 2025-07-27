import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from "./components/Nav";
import { ThemeProvider } from "./contexts/ThemePovider";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="fixed bottom-18 md:bottom-25  w-full flex justify-center">
          <Nav />
        </div>

        <div className="w-full pb-30 min-h-[100vh] pt-10 md:pb-5 md:pt-30 overflow-y-auto no-scrollbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}