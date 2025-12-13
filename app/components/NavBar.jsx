"use client";
import React, { useEffect, useState } from "react";
import useWindowSize from "../hook/useWindowSize";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  const handleClick = (currentLink) => {
    setActiveLink(currentLink);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const home = document.getElementById("home");
      const about = document.getElementById("about");
      const project = document.getElementById("project");
      const resume = document.getElementById("resume");
      const contact = document.getElementById("contact");

      if (!about && !resume && !project && !contact && !home) return;

      if (scrollPosition >= contact.offsetTop - 200) {
        setActiveLink("contact");
      } else if (scrollPosition >= resume.offsetTop - 200) {
        setActiveLink("resume");
      } else if (scrollPosition >= project.offsetTop - 200) {
        setActiveLink("project");
      } else if (scrollPosition >= about.offsetTop - 200) {
        setActiveLink("about");
      } else {
        setActiveLink("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = width <= 672;
  return (
    <nav className="d-flex align-center justify-space-between">
      <h2>marvelous</h2>
      {!isMobile ? (
        <div className="links d-flex gap-5">
          <a
            href="#home"
            className={`text-decoration-none btn ${
              activeLink === "home" ? "active" : ""
            }`}
            onClick={() => handleClick("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`text-decoration-none btn ${
              activeLink === "about" ? "active" : ""
            }`}
            onClick={() => handleClick("about")}
          >
            About
          </a>
          <a
            href="#project"
            className={`text-decoration-none btn ${
              activeLink === "project" ? "active" : ""
            }`}
            onClick={() => handleClick("project")}
          >
            Project
          </a>
          <a
            href="#resume"
            className={`text-decoration-none btn ${
              activeLink === "resume" ? "active" : ""
            }`}
            onClick={() => handleClick("resume")}
          >
            Resume
          </a>
          <a
            href="#contact"
            className={`text-decoration-none btn ${
              activeLink === "contact" ? "active" : ""
            }`}
            onClick={() => handleClick("contact")}
          >
            Contact
          </a>
        </div>
      ) : (
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FiX size={28} style={{ color: "white" }} />
          ) : (
            <FiMenu size={28} style={{ color: "white" }} />
          )}
        </button>
      )}

      {isOpen && (
        <div className="mobile-link d-flex gap-5">
          <div className="content">
            <a
              href="#home"
              className="text-decoration-none"
              onClick={handleCloseMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-decoration-none"
              onClick={handleCloseMenu}
            >
              About
            </a>
            <a
              href="#project"
              className="text-decoration-none"
              onClick={handleCloseMenu}
            >
              Project
            </a>
            <a
              href="#resume"
              className="text-decoration-none"
              onClick={handleCloseMenu}
            >
              Resume
            </a>
            <a
              href="#contact"
              className="text-decoration-none"
              onClick={handleCloseMenu}
            >
              Contact
            </a>
            <button className="cv-btn">
              <a
                href="./myCV.pdf"
                download="myCV.pdf"
                className="text-decoration-none"
                onClick={handleCloseMenu}
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
