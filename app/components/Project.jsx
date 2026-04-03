"use client"
import React, { useEffect } from "react";
import AOS from "aos";

export default function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="project" id="project">
      <h2 className="text-center" data-aos="fade-up">
        Projects
      </h2>

      <div className="project-grid">
        {/* CARD */}
        <div className="grid-item" data-aos="zoom-in">
          <div className="image-wrapper">
            <img src="./genjo.png" alt="genjo project" />
          </div>

          <div className="item-content">
            <h3>
  Genjo Teacher (Work in Progress)
  <span className="role-tag">Frontend</span>
</h3>

            <div className="tech-stack">
              <span>Tailwindcss</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Framer-motion</span>
            </div>
          </div>
        </div>

        <div className="grid-item" data-aos="zoom-in" data-aos-delay="100">
          <div className="image-wrapper">
            <img src="./Bible-study.png" alt="bible study project" />
          </div>

          <div className="item-content">
            <h3>Bible Study</h3>

            <div className="tech-stack">
              <span>SCSS</span>
              <span>Next.js</span>
              <span>Firebase</span>
            </div>

            <div className="view">
              <a href="https://bible-study-project.vercel.app/">
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="grid-item" data-aos="zoom-in" data-aos-delay="200">
          <div className="image-wrapper">
            <img src="./health.png" alt="my portfolio" />
          </div>

          <div className="item-content">
            <h3 className="health_heading d-flex align-center">
  Health Shield
  <span className="role-tag">Frontend</span>
</h3>

<p className="hackathon-tag">
  Cavista Technologies Hackathon 2026
</p>
            <div className="tech-stack">
              <span>SCSS</span>
              <span>React</span>
              <span>Framer-motion</span>
            </div>

            <div className="view">
              <a href="
https://health-shield-black.vercel.app/ ">View Project</a>
            </div>
          </div>
        </div>

        <div className="grid-item" data-aos="zoom-in" data-aos-delay="300">
          <div className="image-wrapper">
            <img src="./budget-tracker.png" alt="budget-tracker" />
          </div>

          <div className="item-content">
            <h3>Budget Tracker</h3>

            <div className="tech-stack">
              <span>SCSS</span>
              <span>React</span>
            </div>

            <div className="view">
              <a href="https://Marvel123g.github.io/Budget-Tracker/">
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="grid-item" data-aos="zoom-in" data-aos-delay="400">
          <div className="image-wrapper">
            <img src="./product-list.jpg" alt="product list with cart" />
          </div>

          <div className="item-content">
            <h3>Product List with Cart</h3>

            <div className="tech-stack">
              <span>SCSS</span>
              <span>JavaScript</span>
            </div>

            <div className="view">
              <a href="https://marvel123g.github.io/product-list-cart/">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}