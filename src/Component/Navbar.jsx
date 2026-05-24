"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo1.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technical Skil", href: "#technicalSkil" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const AppNavbar = () => {
  /* =====================
        STATE
  ===================== */
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  /* =====================
        EFFECTS
  ===================== */

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveHash(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =====================
        HANDLER
  ===================== */

  const handleNavClick = (e, href) => {
    e.preventDefault();

    setActiveHash(href);
    setIsOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.history.pushState(null, "", href);
  };

  /* =====================
        RENDER LINKS
  ===================== */

  const renderLinks = (mobile = false) =>
    navLinks.map(({ label, href }) => {
      const isActive = activeHash === href;

      return (
        <li key={label} className={mobile ? "mb-4" : ""}>
          <Link
            href={href}
            onClick={(e) => handleNavClick(e, href)}
            className={`relative transition font-medium ${mobile
                ? `text-lg ${isActive
                  ? "text-orange-400"
                  : "text-white/70 hover:text-white"
                }`
                : `px-4 py-2 text-sm ${isActive
                  ? "text-orange-400"
                  : "text-white/60 hover:text-white"
                }`
              }`}
          >
            {label}

            {/* underline (desktop only) */}
            {!mobile && (
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-orange-400 transition-all ${isActive ? "w-full" : "w-0"
                  }`}
              />
            )}
          </Link>
        </li>
      );
    });

  /* =====================
        UI
  ===================== */

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity sm:hidden ${isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
          }`}
      />

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 py-3 border-b border-white/10 transition-all duration-300 ${scrolled
            ? "bg-[#070A12]/90 backdrop-blur-xl shadow-lg"
            : "bg-[#070A12]/60 backdrop-blur-2xl"
          }`}
      >
        <div className="flex items-center justify-between">

          {/* LEFT - MOBILE TOGGLE + LOGO */}
          <div className="flex items-center gap-3">

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen((p) => !p)}
              className="sm:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <span className="text-white text-2xl leading-none">
                {isOpen ? "×" : "≡"}
              </span>
            </button>

            {/* Logo */}
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2"
            >
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={120}
                className="rounded-md"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden sm:flex items-center gap-2">
            {renderLinks(false)}
          </ul>
        </div>
      </header>

      {/* MOBILE MENU */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-[360px] bg-[#070A12] px-6 pt-6 shadow-2xl transition-transform duration-300 sm:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* CLOSE */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl hover:text-orange-400"
          >
            ×
          </button>
        </div>

        {/* LINKS */}
        <ul className="flex flex-col">
          {renderLinks(true)}
        </ul>
      </aside>
    </>
  );
};

export default AppNavbar;
