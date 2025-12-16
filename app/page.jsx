"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="home d-flex align-center">
      <img src="./hero.png" alt="hero" />
      <div className="content">
        <div className="header">
          <b className="hi">Hi I'm a</b>{" "}
          <small>
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              cursorColor="red"
              typeSpeed={80}
              deleteSpeed={250}
              delaySpeed={250}
              words={[
                "Frontend Developer",
                "React Developer",
                "Web Enthusiast",
              ]}
              className="typing-content"
            />
          </small>
        </div>
        <h1>Olorunwa Marvelous</h1>
        <p>
          I create thoughtful and engaging web experiences that leave a lasting
          impact. Passionate about building projects that are functional and
          user-friendly. Driven by curiosity, creativity, and a desire to solve
          real problems. Focused on turning ideas into elegant, meaningful
          solutions.
        </p>
        <div className="ctas d-flex gap-3">
          <button>
            <a href="#contact" className="text-decoration-none">
              Contact
            </a>
          </button>
          <button>
            <a
              href="./myCV.pdf"
              download="myCV.pdf"
              className="text-decoration-none"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
