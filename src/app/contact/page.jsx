"use client";

import { FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-3 sm:mb-4">
            Contact
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 sm:mb-6">
            Let’s Work Together
          </h1>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10">
            Have a project in mind or want to collaborate? Send me a message and
            I’ll get back to you soon.
          </p>
            {/* Contact phone and email */}
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
            <div className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition">
                <FaLocationArrow className="inline-block w-5 h-5 mr-2 text-gray-400" />
                <p> <span>Mirpur, Dhaka, Bangladesh</span></p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8 backdrop-blur-xl shadow-xl">
          <div className="grid gap-4 sm:gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg sm:rounded-xl border border-white/10 bg-black/40 px-4 py-3 sm:py-4 text-sm sm:text-base text-white outline-none placeholder:text-white/40 focus:border-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg sm:rounded-xl border border-white/10 bg-black/40 px-4 py-3 sm:py-4 text-sm sm:text-base text-white outline-none placeholder:text-white/40 focus:border-orange-400"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full resize-none rounded-lg sm:rounded-xl border border-white/10 bg-black/40 px-4 py-3 sm:py-4 text-sm sm:text-base text-white outline-none placeholder:text-white/40 focus:border-orange-400"
            ></textarea>

            <button
              type="submit"
              className="rounded-lg sm:rounded-xl bg-white px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition duration-300 hover:bg-orange-400 hover:text-white active:scale-[0.98]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
