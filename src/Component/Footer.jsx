import Link from "next/link";
import { FaDribbble, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiBehance, SiGmail } from "react-icons/si";

const Footer = () => (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/10 px-4 sm:px-6 lg:px-10 py-12 sm:py-14">
        <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-start">

                {/* Left - Brand */}
                <div className="text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                        ACME<span className="text-orange-400">.</span>
                    </h2>

                    <p className="text-white/50 text-sm mt-3 max-w-xs mx-auto sm:mx-0 leading-relaxed">
                        Designing modern, clean, and impactful digital experiences.
                    </p>

                    {/* Contact Info */}
                    <div className="mt-5 flex flex-col gap-3 items-center sm:items-start">
                        <Link
                            href="mailto:yourmail@gmail.com"
                            className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition"
                        >
                            <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-400 group-hover:text-black transition">
                                <SiGmail />
                            </span>
                            <span>jhondoe@gmail.com</span>
                        </Link>

                        <Link
                            href="https://wa.me/1234567890"
                            target="_blank"
                            className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition"
                        >
                            <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-400 group-hover:text-black transition">
                                <FaWhatsapp />
                            </span>
                            <span>0123456789</span>
                        </Link>
                    </div>
                </div>

                {/* Center - Nav */}
                <nav className="flex flex-wrap justify-center sm:justify-start lg:justify-center gap-x-6 gap-y-3 text-sm font-medium">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-white/60 hover:text-orange-400 transition"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-orange-400 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Right - Social */}
                <div className="flex justify-center sm:justify-start lg:justify-end gap-4 text-lg">
                    {[
                        { icon: <FaFacebook />, link: "https://facebook.com" },
                        { icon: <FaTwitter />, link: "https://twitter.com" },
                        { icon: <FaDribbble />, link: "https://dribbble.com" },
                        { icon: <SiBehance />, link: "https://behance.net" },
                    ].map((social, i) => (
                        <Link
                            key={i}
                            href={social.link}
                            target="_blank"
                            className="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition duration-300 hover:bg-orange-400 hover:text-black hover:-translate-y-1"
                        >
                            {social.icon}
                        </Link>
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
