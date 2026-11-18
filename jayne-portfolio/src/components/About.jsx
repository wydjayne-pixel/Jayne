import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  ArrowUpRight,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiCredly } from "react-icons/si";

const experiences = [
  {
    date: "June – October 2026",
    title: "System Tester, QA & Creative",
    company: "BilisBenta Corporation",
    description:
      "Gained hands-on experience in system testing, quality assurance, graphic design, and digital content creation.",
  },
  {
    date: "March 2023",
    title: "Chief Technology Officer",
    company: "Spotless Cleaning Services",
    description:
      "Developed social media marketing strategies and created a chatbot for faster customer support.",
  },
  {
    date: "June 2023",
    title: "Social Media Handler",
    company: "TESDA – Napay PH",
    description:
      "Managed social media promotions, created content, and gained experience in baking and customer service.",
  },
  {
    date: "April 2023",
    title: "Graphic Designer",
    company: "Don Bosco Technical College",
    description:
      "Designed posters, banners, and promotional materials using Adobe Photoshop and Illustrator.",
  },
];

const Sparkle = ({ className = "" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 1v30M1 16h30M5.4 5.4l21.2 21.2M26.6 5.4 5.4 26.6M10 2.5l12 27M2.5 10l27 12M22 2.5l-12 27M2.5 22l27-12" />
  </svg>
);

const About = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-hidden font-sans text-white selection:bg-blue-500/30">
      <div className="pointer-events-none fixed inset-0 z-0 " />

      <div className="page-transition relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-8 pt-6 sm:px-12">
        {/* Section heading */}
        <div
          id="home"
          className="mb-6 flex items-center justify-center gap-3 sm:mb-7"
        >
          <Sparkle className="h-8 w-8 shrink-0 text-[#777] sm:h-10 sm:w-10" />
          <h1 className="text-center text-[29px] font-bold uppercase leading-none tracking-[-1.5px] sm:text-[48px] sm:tracking-[-2px]">
            Self-Summary
          </h1>
          <Sparkle className="h-8 w-8 shrink-0 text-[#777] sm:h-10 sm:w-10" />
        </div>

        {/* Profile and summary */}
        <section
          id="about"
          className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-[0.95fr_2fr]"
        >
          <div className="rounded-[25px] border border-white/[0.025] bg-[#191919] p-[11px]">
            <div className="group relative h-[258px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#4665ef] to-[#67c9e8] sm:h-[258px]">
              <img
                src="/profile.png"
                alt="Louiez Jayne Julian"
                className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
              />
            </div>
          </div>

          <div className="relative flex min-h-[280px] flex-col justify-center overflow-hidden rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1c1c1c] to-[#141414] px-6 py-8 sm:min-h-0 sm:px-7">
            <svg
              className="absolute left-5 top-0 h-14 w-8 text-[#888]"
              viewBox="0 0 32 56"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 0v30M16 30c0 8-4 12-12 12 8 0 12 4 12 12 0-8 4-12 12-12-8 0-12-4-12-12Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <h2 className="mb-2 mt-4 text-[25px] font-semibold tracking-[-0.7px] sm:text-[28px]">
              Louiez Jayne Julian
            </h2>
            <p className="max-w-[540px] text-[14px] font-medium leading-[1.65] text-[#c4c4c4] ">
              I am an Information Technology student with a strong interest in
              technology, graphic design, digital marketing, and
              problem-solving. I enjoy learning new skills, working with others,
              and turning ideas into practical solutions. Through my academic
              experiences, projects, and work opportunities, I have developed
              adaptability, creativity, critical thinking, and the ability to
              work efficiently under pressure.
            </p>
          </div>
        </section>

        {/* Experience and education */}
        <section className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div
            id="experience"
            className="flex min-w-0 flex-col rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-5 sm:p-[22px]"
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7e7e7]">
                Experience
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous experiences"
                  onClick={() => scroll("left")}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.07] bg-[#222] text-[#aaa] transition hover:border-white/20 hover:bg-[#303030] hover:text-white"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Next experiences"
                  onClick={() => scroll("right")}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.07] bg-[#222] text-[#aaa] transition hover:border-white/20 hover:bg-[#303030] hover:text-white"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="experience-carousel grid grid-flow-col auto-cols-[calc(50%-8px)] gap-4 overflow-x-auto pb-2"
              aria-label="Work experience carousel"
            >
              {experiences.map((experience, index) => (
                <article
                  key={`${experience.title}-${experience.date}`}
                  className="min-w-0 border-r border-white/[0.07] pr-3 last:border-r-0 sm:pr-4"
                >
                  <p className="mb-2 text-[10px] leading-relaxed text-[#888] sm:text-[11px]">
                    {experience.date}
                  </p>
                  <h3 className="mb-1 text-[12px] font-semibold leading-[1.45] text-white sm:text-[13px]">
                    {experience.title}
                  </h3>
                  <p className="mb-3 text-[10px] leading-relaxed text-[#a0a0a0] sm:text-[11px]">
                    {experience.company}
                  </p>
                  <p className="text-[10px] leading-[1.6] text-[#858585] sm:text-[11px]">
                    {experience.description}
                  </p>
                  <span className="mt-4 block text-[9px] tracking-[0.12em] text-[#555]">
                    0{index + 1}
                  </span>
                </article>
              ))}
            </div>
            <style>{`
              .experience-carousel { scrollbar-width: none; scroll-snap-type: x mandatory; scroll-behavior: smooth; }
              .experience-carousel::-webkit-scrollbar { display: none; }
              .experience-carousel > article { scroll-snap-align: start; }
            `}</style>
          </div>

          <div className="flex min-h-[300px] flex-col rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-5 sm:min-h-0 sm:p-[22px]">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7e7e7]">
              Education
            </p>
            <div className="mb-7">
              <p className="mb-1 text-[11px] text-[#858585]">Present</p>
              <h3 className="mb-1 text-[13px] font-semibold">
                BS Information Technology
              </h3>
              <p className="mb-2 text-[11px] text-[#929292]">
                Pamantasan ng Lungsod ng Valenzuela
              </p>
              <p className="text-[11px] leading-relaxed text-[#777]">
                Dean’s Lister. Active member of the IT Organization.
              </p>
            </div>
            <div>
              <p className="mb-1 text-[11px] text-[#858585]">
                Graduated July 2023
              </p>
              <h3 className="mb-1 text-[13px] font-semibold">
                ICT – Programming
              </h3>
              <p className="mb-2 text-[11px] text-[#929292]">
                Panghulo Senior High School
              </p>
              <p className="text-[11px] leading-relaxed text-[#777]">
                Graduated as Salutatorian. Secretary of the ICT Club.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-[0.9fr_2fr_0.9fr]">
          {/* Profiles Card */}
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
            className="group relative flex min-h-[180px] cursor-pointer flex-col justify-between rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-5 transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b78ff]/50 sm:min-h-[180px] sm:p-[22px]"
          >
            <div className="flex gap-3">
              <a
                href="https://www.credly.com/users/louiez-jayne-julian"
                target="_blank"
                rel="noreferrer"
                aria-label="Credly profile"
                onClick={(e) => e.stopPropagation()}
                className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#242424] text-[#eee] transition hover:bg-[#333]"
              >
                <SiCredly size={23} />
              </a>
              <a
                href="https://www.linkedin.com/in/louiez-jayne-julian-089252306"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                onClick={(e) => e.stopPropagation()}
                className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#242424] text-[#eee] transition hover:bg-[#333]"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
            <div>
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#686868]">
                Stay With Me
              </p>
              <h2 className="text-[16px] font-semibold">Profiles</h2>
            </div>
            <ArrowUpRight
              className="absolute bottom-5 right-5 text-[#666] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              size={19}
              strokeWidth={1.2}
            />
          </div>

          {/* Let's Work Together Card */}
          <Link
            id="contact"
            to="/contact"
            className="group relative flex min-h-[180px] flex-col justify-center rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-6 transition hover:from-[#202020] sm:min-h-[180px] sm:p-7"
          >
            <svg
              className="absolute left-5 top-0 h-14 w-8 text-[#888]"
              viewBox="0 0 32 56"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 0v30M16 30c0 8-4 12-12 12 8 0 12 4 12 12 0-8 4-12 12-12-8 0-12-4-12-12Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <h2 className="mt-5 text-[32px] font-bold leading-[1.08] tracking-[-1.4px] sm:text-[35px]">
              Let&apos;s
              <br />
              work <span className="text-[#5b78ff]">together.</span>
            </h2>
            <ArrowUpRight
              className="absolute bottom-5 right-5 text-[#666] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              size={20}
              strokeWidth={1.2}
            />
          </Link>

          {/* Credentials Card */}
          <Link
            to="/credentials"
            className="group relative flex min-h-[180px] flex-col justify-between rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-5 transition hover:border-white/20 sm:min-h-[180px] sm:p-[22px]"
          >
            <div className="flex flex-1 items-center justify-center">
              <img
                src="/signature.png"
                alt="Signature"
                className="h-[85px] w-35 object-contain opacity-80 transition group-hover:opacity-100"
              />
            </div>

            <div>
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#686868]">
                More About Me
              </p>
              <h2 className="text-[16px] font-semibold">Credentials</h2>
            </div>

            <PlusCircle
              className="absolute bottom-5 right-5 text-[#666] transition group-hover:rotate-90 group-hover:text-white"
              size={19}
              strokeWidth={1.2}
            />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
