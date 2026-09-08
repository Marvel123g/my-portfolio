"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main id="home" className="home">
      <div className="hero-grid">
        <div className="hero-visual" data-aos="fade-right">
          <div className="hero-frame">
            <div className="hero-frame-topline">
              <span>MARVELOUS / PROFILE 001</span>
              <span className="status-dot" aria-hidden="true" />
            </div>
            <img src="./hero.png" alt="Hero Image" />
            <div className="hero-frame-footer">
              <span>Frontend developer</span>
              <span>Lagos, NG</span>
            </div>
          </div>
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
        </div>

        <div className="content" data-aos="fade-up">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            <span>Hi, I&apos;m</span>
            <div
              className="typewriter"
              aria-label="Frontend Developer, React Developer, Web Enthusiast, and aspiring mobile developer"
            >
              <Typewriter
                loop
                cursor
                cursorStyle="|"
                cursorColor="var(--blue)"
                typeSpeed={80}
                deleteSpeed={250}
                delaySpeed={250}
                words={[
                  "a Frontend Developer",
                  "a React Developer",
                  "a Web Enthusiast",
                  "an Aspiring Mobile Developer (Frontend)",
                ]}
                className="typing-content"
              />
            </div>
          </div>

          <h1>
            Olorunwa <span>Marvelous</span>
          </h1>
          <p>
            I create thoughtful and engaging web experiences that leave a
            lasting impact. Passionate about building projects that are
            functional and user-friendly. Driven by curiosity, creativity, and a
            desire to solve real problems. Focused on turning ideas into
            elegant, meaningful solutions.
          </p>

          <div className="ctas">
            <a href="#contact" className="hero-button primary">
              Contact me <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1_QOHi66mW_BIgFu1DOZIoBVQxrVo0Hn6/view?usp=drivesdk"
              className="hero-button secondary"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-meta" aria-label="Profile details">
            <div>
              <span className="meta-label">Currently</span>
              <strong>Building thoughtful interfaces</strong>
            </div>
            <div>
              <span className="meta-label">Focus</span>
              <strong>Frontend / React / UI</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottomline" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-line" />
        <span>01 / 05</span>
      </div>
    </main>
  );
}
