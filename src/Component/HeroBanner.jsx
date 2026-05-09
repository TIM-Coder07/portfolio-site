"use client";

import Link from "next/link";
import Image from "next/image";
import { FaDribbble, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import heroImg from "@/assets/sajon2.png";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 sm:px-6 lg:px-10 py-16">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* LEFT SIDE - TEXT (always first on mobile) */}
        <div className="text-center md:text-left">
          <h3 className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-3 sm:mb-4">
            Hi there, I’m
          </h3>

          <TypeAnimation
            sequence={[
              "Taj Ibne Masud",
              2000,
              "Web Developer",
              2000,
              "UI Designer",
              2000,
              "Freelancer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-orange-400"
          />

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mt-6 sm:mt-8 mb-8 sm:mb-10 max-w-xl mx-auto md:mx-0">
            A passionate software developer crafting clean, intuitive digital
            experiences. I specialize in building modern web applications using
            React, Next.js, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-8 sm:mb-10">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-300 w-full sm:w-auto text-center"
            >
              Contact Me
            </Link>
            <a
              href="/Taj_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gray-500 text-white hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto text-center"
            >
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            {[
              {
                icon: <FaFacebook />,
                link: "https://www.facebook.com/profile.php?id=100076012159979",
              },
              { icon: <FaTwitter />, link: "https://x.com/TIMSajon1" },
              { icon: <FaDribbble />, link: "https://dribbble.com/Sajon007" },
              { icon: <SiGithub />, link: "https://github.com/TIM-Coder07" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/taj-ibne-masud?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                className="text-gray-400 hover:text-white transition hover:-translate-y-1 duration-300"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE (moves below text on mobile) */}
        <div className="relative flex justify-center order-last md:order-0 mt-6 md:mt-0">
          <div className="relative w-[240px] sm:w-[280px] md:w-[350px] lg:w-[400px] transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src={heroImg}
              alt="Hero"
              width={400}
              height={500}
              className="rounded-2xl shadow-2xl object-cover w-full h-auto"
            />

            {/* glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl -z-10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
