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
                    I'm a passionate software developer with a love for creating intuitive and impactful web applications. With experience in React, Next.js, and Tailwind CSS, I enjoy building projects that solve real-world problems and provide great user experiences.
                </p>

                {/* Paragraph 2 */}
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-400">
                    When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing my knowledge through blogging and community events. I'm always eager to connect with fellow developers and collaborate on exciting projects!
                </p>

            </div>
        </section>
    );
};

export default About;
