import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

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

const projects = [
  {
    id: "tattoo-website",
    category: "WEB DESIGN",
    title: "Tattoo Shop Website",
    image: "/tattoo-5.png",
  },
  {
    id: "event-promotions",
    category: "GRAPHIC DESIGN",
    title: "Event Promotions",
    image: "/design-1.png",
  },
  {
    id: "interactive-game",
    category: "GAME DEVELOPMENT",
    title: "Interactive Game",
    image: "/game-4.png",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/works/${project.id}`}
      className="group flex flex-col rounded-[25px] border border-white/[0.025] bg-[#191919] p-[11px] transition duration-300 hover:bg-[#1f1f1f] cursor-pointer"
    >
      <div className="relative w-full overflow-hidden rounded-[20px] bg-[#222] aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex items-end justify-between px-2 pb-2">
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#888]">
            {project.category}
          </p>
          <h3 className="text-[16px] font-semibold tracking-tight text-white">
            {project.title}
          </h3>
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#888] transition duration-300 group-hover:border-white group-hover:text-white">
          <Plus size={16} strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
};

const Works = () => {
  return (
    <div className="min-h-screen overflow-hidden font-sans text-white selection:bg-blue-500/30">
      <div className="page-transition relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-12 pt-6 sm:px-12">
        <div
          id="home"
          className="mb-6 flex items-center justify-center gap-3 sm:mb-7"
        >
          <Sparkle className="h-8 w-8 shrink-0 text-[#777] sm:h-10 sm:w-10" />
          <h1 className="text-center text-[29px] font-bold uppercase leading-none tracking-[-1.5px] sm:text-[48px] sm:tracking-[-2px]">
            ALL PROJECTS
          </h1>
          <Sparkle className="h-8 w-8 shrink-0 text-[#777] sm:h-10 sm:w-10" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
