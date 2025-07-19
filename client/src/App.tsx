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

      <div>
        <Nav />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}