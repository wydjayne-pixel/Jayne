import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import BentoGrid from "./components/BentoGrid";
import About from "./components/About";
import Works from "./components/Works";
import ProjectDetail from "./components/ProjectDetail";
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

        <footer className="text-center py-12 text-gray-500 text-sm">
          <div className="mb-6 flex items-center justify-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-gradient-to-br from-[#4665ef] to-[#67c9e8] text-[12px] font-black leading-none tracking-tighter text-white shadow-[0_0_20px_-4px_rgba(91,120,255,0.6)]">
              LJ
            </span>
            <span className="text-2xl font-bold tracking-tighter text-white">
              Louiez Jayne
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link to="/" className="hover:text-white transition">
              HOME
            </Link>
            <Link to="/about" className="hover:text-white transition">
              ABOUT
            </Link>
            <Link to="/works" className="hover:text-white transition">
              WORKS
            </Link>
            <Link to="/services" className="hover:text-white transition">
              SERVICES
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              CONTACT
            </Link>
          </div>

          <div className="mx-auto max-w-2xl border-t border-white/10 pt-8">
            <p className="text-gray-400">
              © 2026 Louiez Jayne L. Julian | All Rights Reserved.
            </p>

            <div className="mt-6">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                Credits & Acknowledgments
              </h3>
              <p className="mx-auto max-w-xl text-xs leading-relaxed text-gray-500">
                Selected works were created through academic, collaborative, and
                professional experiences. All third-party materials, trademarks,
                and company-owned projects belong to their respective owners.
                Individual contributions are acknowledged where applicable.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
