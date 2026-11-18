import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const projectData = {
  "tattoo-website": {
    title: "Tattoo Shop Website",
    category: "WEB DESIGN",
    description:
      "A responsive, modern web experience designed for a local tattoo parlor. Focuses on dark aesthetics, smooth navigation, and an intuitive booking flow.",
    images: Array.from({ length: 8 }, (_, i) => `/tattoo-${i + 1}.png`),
  },
  "event-promotions": {
    title: "Event Promotions",
    category: "GRAPHIC DESIGN",
    description:
      "A collection of visually striking promotional materials, posters, and social media graphics designed to drive engagement and attendance for various events.",
    images: Array.from({ length: 8 }, (_, i) => `/design-${i + 1}.png`),
  },
  "interactive-game": {
    title: "Interactive Game",
    category: "GAME DEVELOPMENT",
    description:
      "An immersive game development project focusing on engaging mechanics, beautiful environments, and a seamless user experience.",
    images: Array.from({ length: 7 }, (_, i) => `/game-${i + 3}.png`),
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/works" className="text-[#5b78ff] hover:underline">
            Return to Works
          </Link>
        </div>
      </div>
    );
  }

  const useMasonry =
    projectId === "interactive-game" || projectId === "event-promotions";

  const columns = [[], [], []];
  project.images.forEach((img, index) => {
    columns[index % 3].push(img);
  });

  return (
    <div className="min-h-screen font-sans text-white selection:bg-blue-500/30">
      <div className="page-transition relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-20 pt-6 sm:px-12 sm:pt-10">
        {/* Back Button */}
        <Link
          to="/works"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5b78ff] mb-3">
            {project.category}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-[#a3a3a3] text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* GALLERY SECTION */}
        {useMasonry ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid rounded-[20px] overflow-hidden bg-[#191919] border border-white/[0.025]"
              >
                <img
                  src={img}
                  alt={`${project.title} image ${index + 1}`}
                  className="w-full h-auto object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4 h-full">
                {col.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative flex-1 min-h-[250px] rounded-[20px] overflow-hidden bg-[#191919] border border-white/[0.025]"
                  >
                    <img
                      src={img}
                      alt={`${project.title} image ${imgIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
