"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import FloatingContact from "./components/Float";

export default function Home() {
  return (
    <div className="home d-flex align-center">
      <img src="./hero.png" alt="hero" />
      <div className="content">
        <div className="header">
          <b className="hi">Hi I'm </b>{" "}
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
                "a Frontend Developer",
                "a React Developer",
                "a Web Enthusiast",
                "an Aspiring Mobile Developer(Frontend)"
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
              href="https://drive.google.com/file/d/1yBGCxa9Sf97WxwyR2y8pCpUQDJGnJFpG/view?usp=drivesdk"
              // download="resume.pdf"
              className="text-decoration-none"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
      
      <FloatingContact/>
    </div>
  );
}
