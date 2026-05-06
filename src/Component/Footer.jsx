import Link from "next/link";
import {
  FaDribbble,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import logo from "@/assets/logo1.png";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-[#0A0A0A] text-white border-t border-white/10 px-4 sm:px-6 lg:px-10 py-12 sm:py-14">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
        {/* Left - Brand */}
        <div className="text-center sm:text-left">
          <Link
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-tight"
          >
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={120}
              className="rounded-md"
            />
          </Link>

          <p className="text-white/50 text-sm mt-3 max-w-xs mx-auto sm:mx-0 leading-relaxed">
            Designing modern, clean, and impactful digital experiences.
          </p>

          {/* Contact Info */}
          <div className="mt-5 flex flex-col gap-3 items-center sm:items-start">
            <a
              href="mailto:sajonwdd72566@gmail.com"
              className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition"
              aria-label="Send Email"
            >
              <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-400 group-hover:text-black transition">
                <SiGmail />
              </span>
              <span>sajonwdd72566@gmail.com</span>
            </a>

            <a
              href="https://wa.me/8801625587701"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition"
              aria-label="WhatsApp"
            >
              <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-400 group-hover:text-black transition">
                <FaWhatsapp />
              </span>
              <span>880 1625 587701</span>
            </a>
          </div>
        </div>

        {/* Center - Nav */}
        <nav className="flex flex-wrap justify-center sm:justify-start lg:justify-center gap-x-6 gap-y-3 text-sm font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative text-white/60 hover:text-orange-400 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-orange-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right - Social */}
        <div className="flex justify-center md:justify-start gap-5 text-xl">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/profile.php?id=100076012159979",
              label: "Facebook",
            },
            {
              icon: <FaTwitter />,
              link: "https://x.com/TIMSajon1",
              label: "Twitter",
            },
            {
              icon: <FaDribbble />,
              link: "https://dribbble.com/Sajon007",
              label: "Dribbble",
            },
            {
              icon: <SiGithub />,
              link: "https://github.com/TIM-Coder07",
              label: "GitHub",
            },
            {
              icon: <FaLinkedinIn />,
              link: "https://www.linkedin.com/in/taj-ibne-masud/",
              label: "LinkedIn",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-gray-400 hover:text-white transition hover:-translate-y-1 duration-300 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 text-center sm:text-left">
        <p>© {new Date().getFullYear()} Taj. All rights reserved.</p>

        <p className="text-white/30">
          Crafted with passion for clean digital experiences.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
