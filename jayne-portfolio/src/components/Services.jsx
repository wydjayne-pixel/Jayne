import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Monitor,
  Gamepad2,
  Video,
  ClipboardCheck,
  PlusCircle,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiCredly } from "react-icons/si";

// Sparkle heading decoration
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

const servicesData = [
  {
    id: "web-design",
    title: "Web Design",
    icon: Monitor,
    description:
      "I craft visually appealing, responsive websites with clean layouts and intuitive navigation. My goal is to turn your ideas into modern, functional, and user-friendly digital experiences.",
  },
  {
    id: "game-design",
    title: "Game Design",
    icon: Gamepad2,
    description:
      "I design creative, interactive game experiences that combine engaging mechanics with immersive visuals. I strive to bring unique concepts to life while ensuring fun and user-friendly gameplay.",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    icon: Video,
    description:
      "I create engaging digital content for social media and marketing, including graphic design and video editing. I focus on creative storytelling that captures attention and reflects your brand’s identity.",
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance (QA)",
    icon: ClipboardCheck,
    description:
      "I perform detailed software testing and quality assurance to ensure systems function properly and reliably. From identifying bugs to evaluating usability, I focus on delivering a polished final product.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full overflow-hidden font-sans text-white selection:bg-blue-500/30">
      <div className="page-transition mx-auto w-full max-w-[1200px] px-5 pb-10 pt-6 sm:px-12 sm:pt-10">
        {/* Full-Width Heading */}
        <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
          <Sparkle className="h-8 w-8 shrink-0 text-[#777] sm:h-10 sm:w-10" />
          <h1 className="text-center text-[29px] font-bold uppercase leading-none tracking-[-1.5px] sm:text-[48px] sm:tracking-[-2px]">
            My Offerings
          </h1>
          <Sparkle className="h-8 w-8 shrink-0 text-[#777] sm:h-10 sm:w-10" />
        </div>

        {/* MAIN SERVICES SECTION */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
          {/* LEFT SIDEBAR */}
          <div className="grid grid-cols-2 gap-y-8 rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] px-7 py-9 lg:flex lg:h-full lg:flex-col lg:justify-between lg:gap-0 lg:px-10 lg:py-14">
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group flex cursor-pointer items-center gap-5 transition-opacity hover:opacity-70"
                >
                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="shrink-0 text-white transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* RIGHT CONTENT CONTAINER */}
          <div className="rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-[18px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-full">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col rounded-[20px] bg-[#222222] p-6 transition-colors duration-300 hover:bg-[#282828]"
                >
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#888]">
                    {service.title}
                  </p>
                  <p className="text-[14px] leading-[1.7] text-[#a0a0a0]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CARDS */}
        <section className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[0.9fr_2fr_0.9fr]">
          {/* PROFILES CARD — now links to contact form */}
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
            className="group relative flex min-h-[190px] cursor-pointer flex-col justify-between rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-5 transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b78ff]/50 sm:p-[22px]"
          >
            {/* Social Icons Pill */}
            <div className="flex w-full items-center justify-center gap-4 rounded-full border border-white/[0.025] bg-[#1a1a1a] py-3 px-2">
              <a
                href="https://www.credly.com/users/louiez-jayne-julian"
                target="_blank"
                rel="noreferrer"
                aria-label="Credly profile"
                onClick={(e) => e.stopPropagation()}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#242424] text-[#eee] transition hover:bg-[#333]"
              >
                <SiCredly size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/louiez-jayne-julian-089252306"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                onClick={(e) => e.stopPropagation()}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#242424] text-[#eee] transition hover:bg-[#333]"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            <div className="mt-4">
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#686868]">
                Stay With Me
              </p>
              <h2 className="text-[16px] font-semibold">Profiles</h2>
            </div>

            <PlusCircle
              className="absolute bottom-5 right-5 text-[#666] transition-all duration-300 group-hover:rotate-90 group-hover:text-white"
              size={19}
              strokeWidth={1.2}
            />
          </div>

          {/* LET'S WORK TOGETHER CARD */}
          <Link
            to="/contact"
            className="group relative flex min-h-[190px] flex-col justify-center overflow-hidden rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-6 transition-all duration-300 hover:from-[#202020] sm:p-7"
          >
            {/* Decorative Element */}
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

            <h2 className="mt-6 text-[32px] font-bold leading-[1.08] tracking-[-1.4px] sm:text-[36px]">
              Let&apos;s
              <br />
              work <span className="text-[#5b78ff]">together.</span>
            </h2>

            <PlusCircle
              className="absolute bottom-5 right-5 text-[#666] transition-all duration-300 group-hover:rotate-90 group-hover:text-white"
              size={19}
              strokeWidth={1.2}
            />
          </Link>

          {/* CREDENTIALS CARD */}
          <Link
            to="/credentials"
            className="group relative flex min-h-[190px] flex-col justify-between rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-5 transition-all duration-300 hover:border-white/20 sm:p-[22px]"
          >
            <div className="flex flex-1 items-center justify-center pt-2">
              <img
                src="/signature.png"
                alt="Signature"
                className="h-[85px] w-35 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <div>
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#686868]">
                More About Me
              </p>
              <h2 className="text-[16px] font-semibold">Credentials</h2>
            </div>

            <PlusCircle
              className="absolute bottom-5 right-5 text-[#666] transition-all duration-300 group-hover:rotate-90 group-hover:text-white"
              size={19}
              strokeWidth={1.2}
            />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Services;
