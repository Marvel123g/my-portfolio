import React from "react";

export default function Project() {
  return (
    <div className="project" id="project">
      <h2 className="text-center">Projects</h2>
      <div className="project-grid">
        <div className="grid-item">
          <img src="./Job-Search.png" alt="job-search project" />
          <div className="item-content">
            <h3>Job Search(Work in Progress)</h3>
            <p></p>
            <div className="tech-stack d-flex gap-3">
              <span>SCSS</span>
              <span>REACT</span>
            </div>
            <div className="view d-flex gap-2">
              {/* <a href="#">View Project</a> */}
              <a href="https://github.com/Marvel123g/Job-Search.git">
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <img src="./Bible-study.png" alt="job-search project" />
          <div className="item-content">
            <h3>Bible Study</h3>
            <p></p>
            <div className="tech-stack d-flex gap-3">
              <span>SCSS</span>
              <span>Next.js</span>
              <span>Firebase</span>
            </div>

            <div className="view d-flex gap-2">
              <a href="https://bible-study-project.vercel.app/">View Project</a>
              <a href="https://github.com/Marvel123g/Bible-study-project-.git">
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <img src="./myPortfolio.png" alt="job-search project" />
          <div className="item-content">
            <h3>Portfolio Website</h3>
            <p></p>
            <div className="tech-stack d-flex gap-3">
              <span>SCSS</span>
              <span>EMAIL.JS</span>
              <span>Next.js</span>
            </div>

            <div className="view d-flex gap-2">
              <a href="https://github.com/Marvel123g/portfolio-web-app.git">
                View Project
              </a>
              <a href="https://portfolio-web-app-lovat.vercel.app/">
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <img src="./budget-tracker.png" alt="budget-tracker" />
          <div className="item-content">
            <h3>Budget Tracket</h3>
            <p></p>
            <div className="tech-stack d-flex gap-3">
              <span>SCSS</span>
              <span>React.js</span>
            </div>

            <div className="view d-flex gap-2">
              <a href="https://Marvel123g.github.io/Budget-Tracker/">
                View Project
              </a>
              <a href="https://github.com/Marvel123g/Budget-Tracker.git">
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <img src="./product-list.jpg" alt="college" />
          <div className="item-content">
            <h3>Product List with Cart</h3>
            <p></p>
            <div className="tech-stack d-flex gap-3">
              <span>SCSS</span>
              <span>JavaScript</span>
            </div>

            <div className="view d-flex gap-2">
              <a href="https://marvel123g.github.io/product-list-cart/">
                View Project
              </a>
              <a href="https://github.com/Marvel123g/product-list-cart.git">
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
