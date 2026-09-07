"use client";

import React, { useEffect, useState } from "react";
import useWindowSize from "../hook/useWindowSize";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "#", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Project", href: "#project", id: "project" },
  { label: "Resume", href: "#resume", id: "resume" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const resumeUrl =
  "https://drive.google.com/file/d/1_QOHi66mW_BIgFu1DOZIoBVQxrVo0Hn6/view?usp=drivesdk";

export default function NavBar() {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = links
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);

      const current = [...sections]
        .reverse()
        .find((section) => scrollPosition >= section.offsetTop - 220);

      if (current) setActiveLink(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);
  };

  const isMobile = width <= 672;

  return (
    <nav aria-label="Primary navigation">
      <a href="#home" aria-label="Marvelous home">
        <h2>marvelous</h2>
      </a>

      {!isMobile ? (
        <div className="links">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-decoration-none btn ${
                activeLink === link.id ? "active" : ""
              }`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      )}

      {isOpen && (
        <div className="mobile-link" id="mobile-navigation">
          <div className="content">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-decoration-none"
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </a>
            ))}
            <button type="button" className="cv-btn">
              <a href={resumeUrl} onClick={() => setIsOpen(false)}>
                Download CV
              </a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
