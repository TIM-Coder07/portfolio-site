"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Better scroll detection (active section feel)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) =>
        document.querySelector(l.href)
      );

      sections.forEach((section, i) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveHash(navLinks[i].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();

    setActiveHash(href);
    setIsOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.history.pushState(null, "", href);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
          }`}
      />

      {/* NAVBAR */}
      <Navbar
        className={`fixed top-0 left-0 w-full z-50 px-4 py-3 border-b border-white/10 transition-all duration-300
        ${scrolled
            ? "bg-[#070A12]/90 backdrop-blur-xl shadow-lg"
            : "bg-[#070A12]/60 backdrop-blur-2xl"
          }`}
      >
        <NavbarContent justify="start">
          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="sm:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <span className="text-white text-2xl leading-none">
              {isOpen ? "×" : "≡"}
            </span>
          </button>

          {/* Logo */}
          <NavbarBrand>
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-white font-bold text-lg"
            >
              ACME<span className="text-orange-400">.</span>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Nav */}
        <NavbarContent justify="center" className="hidden sm:flex gap-2">
          {navLinks.map(({ label, href }) => {
            const active = activeHash === href;

            return (
              <NavbarItem key={label}>
                <Link
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`px-4 py-2 text-sm font-medium transition relative
                    ${active
                      ? "text-orange-400"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  {label}

                  {/* active underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-orange-400 transition-all
                    ${active ? "w-full" : "w-0"}`}
                  />
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>

      {/* MOBILE MENU */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-[360px] bg-[#070A12] px-6 pt-6 shadow-2xl transition-transform duration-300 sm:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl hover:text-orange-400 transition"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-5">
          {navLinks.map(({ label, href }) => {
            const active = activeHash === href;

            return (
              <Link
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`text-lg font-medium transition ${active
                    ? "text-orange-400"
                    : "text-white/70 hover:text-white"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default AppNavbar;
