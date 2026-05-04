'use client';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Brand Identity System",
      desc: "A complete branding project including logo, typography, and visual guidelines.",
      tag: "Branding",
    },
    {
      title: "E-commerce UI/UX",
      desc: "Designed a seamless shopping experience with clean layouts and strong conversions.",
      tag: "UI/UX",
    },
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio built with Next.js and Tailwind.",
      tag: "Web Dev",
    },
    {
      title: "Mobile App Design",
      desc: "User-friendly mobile app interface focused on usability and simplicity.",
      tag: "Mobile",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0A0A0A] text-white px-4 sm:px-6 md:px-10 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            My Projects
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            A selection of my recent work and creative explorations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >

              {/* Tag */}
              <span className="inline-block text-xs font-medium text-orange-400 mb-3">
                {project.tag}
              </span>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-white">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <button className="text-sm font-medium text-white/70 group-hover:text-white transition">
                  View Project →
                </button>

                {/* Arrow Icon */}
                <span className="text-white/40 group-hover:text-white transition transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
