'use client';

const About = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-white px-4 sm:px-6 lg:px-10 py-16 sm:py-20">

            <div className="max-w-3xl text-center">

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 sm:mb-6">
                    About Me
                </h1>

                {/* Paragraph 1 */}
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-4 sm:mb-6">
                    I’m a front-end web developer who loves building clean and user-friendly websites. I enjoy working with HTML5, CSS3, JavaScript, React.js, Next.js, and Node.js to turn ideas into real projects.
                </p>

                {/* Paragraph 2 */}
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-400">
                    I focus on creating responsive (mobile-friendly), fast, and visually appealing websites with a strong emphasis on UI/UX design and performance optimization. I’m also exploring backend tools like Firebase to build complete full-stack web applications.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-400">
                    I like learning new things, solving problems, and taking on new challenges. Always improving, one project at a time.
                </p>

            </div>
        </section>
    );
};

export default About;
