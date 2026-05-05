'use client';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Real Estate Website",
      desc: "A responsive real estate platform that allows users to explore property listings with a clean and modern interface. It provides an easy browsing experience with smooth navigation and organized property displays.Built using HTML, CSS, and JavaScript, the project focuses on user- friendly design, responsiveness across all devices, and a simple UI for better property discovery.",
      tag: "Real Estate",
      liveLink:"https://tim-coder07.github.io/Real_State/index.html",
      github:"https://github.com/TIM-Coder07/Real_State"
    },
    {
      title: "E-commerce UI/UX",
      desc: "A modern and scalable e-commerce web application designed with a strong focus on user experience and performance. It features a clean UI, smooth navigation, and optimized shopping flow to enhance customer engagement.Built using Next.js and Tailwind CSS, the project integrates secure authentication with better-auth and leverages popular npm packages for improved functionality, responsiveness, and seamless interactions.",
      tag: "UI/UX",
      liveLink:"https://fast-basket.vercel.app/",
      github:"https://github.com/abufahimkhan/fast-basket"
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
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-sm font-medium text-white/70 hover:text-white transition"
                >
                  Live →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-sm text-gray-400 hover:text-white transition"
                >
                  Code →
                </a>
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
