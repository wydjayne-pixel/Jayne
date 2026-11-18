import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCredly } from "react-icons/si";

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

const experienceData = [
  {
    date: "June – October 2026",
    title: "System Tester, Quality Assurance & Creative Intern",
    company: "BilisBenta Corporation",
    description:
      "Gained hands-on experience in system testing, quality assurance, graphic design, and digital content creation. Worked closely with the team to identify system issues, improve user experience, and develop creative materials for digital platforms. Collaborated on various projects while strengthening my technical, creative, and problem-solving skills.",
  },
  {
    date: "March 2023",
    title: "Chief Technology Officer (CTO)",
    company: "Spotless Cleaning Services",
    description:
      "Developed social media marketing strategies and promotional materials to increase brand awareness. Created and integrated a chatbot to provide faster and more convenient customer support.",
  },
  {
    date: "June 2023",
    title: "Social Media Handler & Baker",
    company: "TESDA – Napay PH Bakeshop & Baker Jaz",
    description:
      "Gained experience in baking, product presentation, customer service, and digital marketing. Managed social media promotions and created content to support online engagement and product sales.",
  },
  {
    date: "April 2023",
    title: "Graphic Designer",
    company: "Don Bosco Technical College",
    description:
      "Designed posters, banners, and promotional materials for school events using Adobe Photoshop and Illustrator. Collaborated with faculty members and student organizations to create visually appealing designs.",
  },
];

const educationData = [
  {
    date: "Present",
    degree: "BS Information Technology",
    school: "Pamantasan ng Lungsod ng Valenzuela (PLV)",
    description:
      "Dean’s Lister during my 1st and 2nd years, active member of the IT Organization, and participant and leader in various IT-related contests and competitions.",
  },
  {
    date: "Graduated July 2023",
    degree: "ICT – Programming",
    school: "Panghulo Senior High School",
    description:
      "Graduated as Salutatorian and received an Outstanding Performance in ICT (Programming) award. I also served as Secretary of the ICT Club and participated as an active member of the Robotics Club.",
  },
];

const skillsData = [
  { name: "Web Design", desc: "Responsive, modern, user-friendly." },
  { name: "UI/UX Design", desc: "Intuitive, creative, accessible." },
  { name: "Game Design", desc: "Interactive, engaging, imaginative." },
  { name: "Quality Assurance (QA)", desc: "Detailed, reliable, functional." },
  { name: "Graphic Design", desc: "Creative, expressive, visually appealing." },
  { name: "Content Creation", desc: "Engaging, innovative, impactful." },
];

const certificationsData = [
  {
    date: "May 2025",
    title: "Network Support and Security",
    issuer: "Cisco Networking Academy",
  },
  {
    date: "April 2025",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
  },
  {
    date: "April 2025",
    title: "Network Addressing and Basic Troubleshooting",
    issuer: "Cisco Networking Academy",
  },
  {
    date: "April 2025",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
  },
  {
    date: "April 2025",
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
  },
];

const Credentials = () => {
  return (
    // Removed overflow-hidden because it interferes with sticky positioning
    <div className="min-h-screen font-sans text-white selection:bg-blue-500/30">
      <div className="page-transition relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-20 pt-6 sm:px-12 sm:pt-10">
        {/* Section heading */}
        <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
          <Sparkle className="h-8 w-8 shrink-0 text-[#777] sm:h-10 sm:w-10" />

          <h1 className="text-center text-[29px] font-bold uppercase leading-none tracking-[-1.5px] sm:text-[48px] sm:tracking-[-2px]">
            Credentials
          </h1>

          <Sparkle className="h-8 w-8 shrink-0 text-[#777] sm:h-10 sm:w-10" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr] lg:gap-16">
          {/* Left Column - Sticky Profile Card */}
          <div className="group flex h-fit flex-col self-start rounded-[25px] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-6 transition duration-300 lg:sticky lg:top-12">
            {/* Profile Image - Grayscale to Color Hover */}
            <div className="relative mb-6 h-[280px] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#4665ef] to-[#67c9e8]">
              <img
                src="/profile.png"
                alt="Louiez Jayne"
                className="h-full w-full object-cover grayscale transition duration-500 ease-in-out group-hover:grayscale-0"
              />
            </div>

            <h2 className="mb-1 text-center text-2xl font-bold tracking-tight">
              Louiez Jayne
            </h2>

            <p className="mb-6 text-center text-sm text-[#888]">@louiezjayne</p>

            {/* Social Links */}
            <div className="mb-8 flex justify-center gap-3">
              <a
                href="https://www.credly.com/users/louiez-jayne-julian"
                target="_blank"
                rel="noreferrer"
                aria-label="Credly profile"
                className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#242424] text-[#eee] transition duration-300 hover:scale-105 hover:bg-[#333]"
              >
                <SiCredly size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/louiez-jayne-julian-089252306"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#242424] text-[#eee] transition duration-300 hover:scale-105 hover:bg-[#333]"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="#"
                aria-label="GitHub profile"
                className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#242424] text-[#eee] transition duration-300 hover:scale-105 hover:bg-[#333]"
              >
                <FaGithub size={22} />
              </a>
            </div>

            {/* Let's Talk — now links to the contact page */}
            <Link
              to="/contact"
              className="mt-auto flex min-h-[50px] w-full items-center justify-center rounded-xl border border-white/[0.025] bg-[#222] py-3.5 text-sm font-semibold transition duration-300 hover:bg-[#2a2a2a]"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Right Column - Content */}
          <div className="flex min-w-0 flex-col gap-10">
            {/* ABOUT ME */}
            <section>
              <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7e7e7]">
                About Me
              </h2>

              <p className="text-sm leading-relaxed text-[#a3a3a3]">
                I am an Information Technology student with a strong interest in
                technology, graphic design, digital marketing, and
                problem-solving. I enjoy learning new skills, working with
                others, and turning ideas into practical solutions. Through my
                academic experiences, projects, and work opportunities, I have
                developed adaptability, creativity, critical thinking, and the
                ability to work efficiently under pressure.
              </p>
            </section>

            {/* EXPERIENCE */}
            <section>
              <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7e7e7]">
                Experience
              </h2>

              <div className="flex flex-col gap-8">
                {experienceData.map((exp, i) => (
                  <div key={i}>
                    <p className="mb-2 text-[11px] text-[#888]">{exp.date}</p>

                    <h3 className="mb-1 text-[15px] font-semibold text-[#5b78ff]">
                      {exp.title}
                    </h3>

                    <p className="mb-3 text-[12px] text-[#888]">
                      {exp.company}
                    </p>

                    <p className="text-sm leading-relaxed text-[#a3a3a3]">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCATION */}
            <section>
              <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7e7e7]">
                Education
              </h2>

              <div className="flex flex-col gap-8">
                {educationData.map((edu, i) => (
                  <div key={i}>
                    <p className="mb-2 text-[11px] text-[#888]">{edu.date}</p>

                    <h3 className="mb-1 text-[15px] font-semibold text-[#5b78ff]">
                      {edu.degree}
                    </h3>

                    <p className="mb-3 text-[12px] text-[#888]">{edu.school}</p>

                    <p className="text-sm leading-relaxed text-[#a3a3a3]">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section>
              <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7e7e7]">
                Skills
              </h2>

              <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
                {skillsData.map((skill, i) => (
                  <div key={i}>
                    <h3 className="mb-1 text-[15px] font-semibold text-white">
                      {skill.name}
                    </h3>

                    <p className="text-[13px] text-[#888]">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CERTIFICATIONS */}
            <section>
              <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7e7e7]">
                Certifications
              </h2>

              <div className="flex flex-col gap-6">
                {certificationsData.map((cert, i) => (
                  <div key={i}>
                    <p className="mb-1 text-[11px] text-[#888]">{cert.date}</p>

                    <h3 className="mb-1 text-[15px] font-semibold text-[#5b78ff]">
                      {cert.title}
                    </h3>

                    <p className="text-[13px] text-[#888]">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
