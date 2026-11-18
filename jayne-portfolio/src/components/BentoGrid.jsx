import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Camera, Aperture, Cloud, Box, Plus } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiCredly } from "react-icons/si";

const BentoGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden font-sans text-white selection:bg-blue-500/30">
      <div className="page-transition grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mt-12 px-5 sm:px-12">
        {/* 1. Profile Card */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#1b1b1b] to-[#141414] border border-white/[0.025] rounded-[25px] p-6 flex flex-col md:flex-row gap-6 relative overflow-hidden group h-full md:min-h-[312px]">
          <div className="w-full md:w-[45%] h-64 md:h-auto min-h-0 rounded-[20px] overflow-hidden relative bg-gradient-to-br from-[#4665ef] to-[#67c9e8]">
            <img
              src="/profile.png"
              alt="Louiez Jayne Julian"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />
          </div>

          <div className="w-full md:w-[55%] flex flex-col justify-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">
              A Web Designer
            </p>

            <h1 className="text-4xl font-bold leading-tight mb-3 tracking-tight">
              Louiez Jayne
              <br />
              Julian.
            </h1>

            <p className="text-sm text-gray-400">
              I am a Web Designer based in Philippines.
            </p>
          </div>

          <div className="absolute bottom-6 right-6 text-gray-500 hover:text-white transition cursor-pointer">
            <Plus size={24} className="stroke-[1.5]" />
          </div>
        </div>

        {/* 2. Marquee / Ticker */}
        <div className="md:col-span-2 bg-[#1b1b1b] border border-white/[0.025] rounded-full h-[42px] flex items-center overflow-hidden relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#1b1b1b] to-transparent z-10 pointer-events-none" />

          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#1b1b1b] to-transparent z-10 pointer-events-none" />

          <div className="whitespace-nowrap flex animate-marquee w-max items-center">
            {[0, 1].map((block) => (
              <div className="flex items-center" key={block}>
                {[...Array(5)].map((_, i) => (
                  <div key={`${block}-${i}`} className="flex items-center mx-3">
                    <span className="text-[9px] text-gray-500 uppercase tracking-wide font-medium">
                      Latest Work and{" "}
                      <span className="text-white font-bold">Featured</span>
                    </span>

                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600 ml-3"
                    >
                      <path d="M12 4v16m8-8H4m2.34-5.66l11.32 11.32M5.66 5.66l11.32 11.32" />
                    </svg>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 3. Credentials */}
        <Link
          to="/credentials"
          className="bg-gradient-to-br from-[#1b1b1b] to-[#141414] border border-white/[0.025] rounded-[25px] p-6 h-[180px] md:h-[250px] relative flex flex-col justify-between overflow-hidden group transition hover:border-white/20"
        >
          <div className="flex-1 flex items-center justify-center min-h-0">
            <img
              src="/signature.png"
              alt="Signature"
              className="w-40 h-40 object-contain opacity-80 transition group-hover:opacity-100"
            />
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#686868] mb-1">
              More About Me
            </p>

            <h2 className="text-base font-semibold text-white">Credentials</h2>
          </div>

          <div className="absolute bottom-6 right-6 text-gray-500 transition group-hover:rotate-90 group-hover:text-white">
            <Plus size={24} className="stroke-[1.5]" />
          </div>
        </Link>

        {/* 4. Projects */}
        <Link
          to="/works"
          className="bg-gradient-to-br from-[#1b1b1b] to-[#141414] border border-white/[0.025] rounded-[25px] p-6 h-[180px] md:h-[250px] relative flex flex-col justify-between overflow-hidden group transition hover:border-white/20 block"
        >
          <div className="absolute -top-2 right-2 text-3xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition">
            MY WORKS
          </div>

          <img
            src="/tattoo-5.png"
            alt="Featured Project"
            className="w-28 h-16 object-cover rounded-md shadow-lg self-center mt-2 z-10 transition group-hover:scale-105"
          />

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#686868] mb-1">
              Showcase
            </p>

            <h2 className="text-base font-semibold text-white">Projects</h2>
          </div>

          <div className="absolute bottom-6 right-6 text-gray-500 transition group-hover:rotate-90 group-hover:text-white z-10">
            <Plus size={24} className="stroke-[1.5]" />
          </div>
        </Link>

        {/* 5. Services */}
        <Link
          to="/services"
          className="md:col-span-2 bg-gradient-to-br from-[#1b1b1b] to-[#141414] border border-white/[0.025] rounded-[25px] p-6 h-[180px] md:h-[184px] relative flex flex-col justify-between group transition hover:border-white/20"
        >
          <div className="flex justify-around items-center text-gray-300 mt-4 px-2">
            <Camera
              size={30}
              className="group-hover:text-white transition cursor-pointer stroke-[1.5]"
            />
            <Aperture
              size={30}
              className="group-hover:text-white transition cursor-pointer stroke-[1.5]"
            />
            <Cloud
              size={30}
              className="group-hover:text-white transition cursor-pointer stroke-[1.5]"
            />
            <Box
              size={30}
              className="group-hover:text-white transition cursor-pointer stroke-[1.5]"
            />
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#686868] mb-1">
              Specialization
            </p>
            <h2 className="text-base font-semibold text-white">
              Services Offering
            </h2>
          </div>

          <div className="absolute bottom-6 right-6 text-gray-500 transition group-hover:rotate-90 group-hover:text-white">
            <Plus size={24} className="stroke-[1.5]" />
          </div>
        </Link>

        {/* 6. Profiles — now links to contact form */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => navigate("/contact")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              navigate("/contact");
            }
          }}
          className="md:col-span-2 bg-gradient-to-br from-[#1b1b1b] to-[#141414] border border-white/[0.025] rounded-[25px] p-6 h-[180px] md:h-[184px] relative flex flex-col justify-between overflow-hidden cursor-pointer group transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b78ff]/50"
        >
          <div className="flex gap-4 mt-2 items-center">
            <a
              href="https://www.credly.com/users/louiez-jayne-julian"
              target="_blank"
              rel="noreferrer"
              aria-label="Credly profile"
              onClick={(e) => e.stopPropagation()}
              className="h-[54px] w-[54px] rounded-full bg-[#242424] flex items-center justify-center hover:bg-[#333] transition text-[#eee]"
            >
              <SiCredly size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/louiez-jayne-julian-089252306"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              onClick={(e) => e.stopPropagation()}
              className="h-[54px] w-[54px] rounded-full bg-[#242424] flex items-center justify-center hover:bg-[#333] transition text-[#eee]"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#686868] mb-1">
              Stay With Me
            </p>

            <h2 className="text-base font-semibold text-white">Profiles</h2>
          </div>

          <div className="absolute bottom-6 right-6 text-gray-500 transition group-hover:rotate-90 group-hover:text-white">
            <Plus size={24} className="stroke-[1.5]" />
          </div>
        </div>

        {/* 7. CTA — Full-width Contact Card */}
        <Link
          to="/contact"
          className="md:col-span-4 relative flex min-h-[240px] items-center justify-between overflow-hidden rounded-[25px] border border-white/[0.06] bg-gradient-to-br from-[#1c1c1c] via-[#151515] to-[#101010] p-8 transition-all duration-300 hover:border-[#5b78ff]/30 sm:p-10 md:p-12 group"
        >
          <div className="pointer-events-none absolute -right-16 -top-32 h-80 w-80 rounded-full bg-[#5b78ff]/[0.08] blur-[100px] transition-all duration-500 group-hover:bg-[#5b78ff]/[0.15]" />

          <span className="pointer-events-none absolute -right-4 -top-10 select-none text-[120px] font-black tracking-tighter text-white/[0.025] sm:right-8 sm:text-[180px]">
            LET&apos;S TALK
          </span>

          <div className="relative z-10 max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#5b78ff] shadow-[0_0_12px_#5b78ff]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400 sm:text-xs">
                Have a project in mind?
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Let&apos;s work
              <br className="sm:hidden" />{" "}
              <span className="text-[#5b78ff]">together.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
              Have an idea you&apos;d like to bring to life? Let&apos;s make it
              happen.
            </p>
          </div>

          <div className="relative z-10 ml-6 hidden shrink-0 sm:block">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 group-hover:border-[#5b78ff]/50 group-hover:bg-[#5b78ff] group-hover:text-white group-hover:rotate-[-45deg]">
              <ArrowRight size={26} strokeWidth={1.5} />
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 sm:hidden">
            <ArrowRight size={20} strokeWidth={1.5} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BentoGrid;
