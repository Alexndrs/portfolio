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

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="absolute bottom-5  w-full flex justify-center">
          <Nav />
        </div>

        <div className="w-full h-screen pb-30 pt-10 md:pb-5 md:pt-30 overflow-y-auto no-scrollbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}