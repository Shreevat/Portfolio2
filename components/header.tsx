"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const HEADER_NAME = "Shreevatshanka";
const NAV_LINKS = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          {HEADER_NAME}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {mounted && (
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-primary/20"
      >
        <ul className="flex flex-col gap-4 px-4 py-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium block"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
