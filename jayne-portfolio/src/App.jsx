import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import BentoGrid from "./components/BentoGrid";
import About from "./components/About";
import Works from "./components/Works";
import ProjectDetail from "./components/ProjectDetail"; // <-- Add this
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
        <Navbar />

        <main className="pb-20">
          <Routes>
            <Route path="/" element={<BentoGrid />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />{" "}
            {/* <-- Add this */}
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        {/* ... footer code stays the same ... */}
      </div>
    </BrowserRouter>
  );
}

export default App;
