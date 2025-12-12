import React from "react";

export default function About() {
  return (
    <div className="about d-flex align-center flex-column" id="about">
      <h2>About me</h2>
      <div className="about-content d-flex align-center">
        <div className="text">
          <p>
            I'm a passionate and detail-oriented frontend deveoper who enjoys
            building clean, responsive, and user-friendy web experiences. My
            journey began with small projects and coding challenges on a
            platform called Frontend Mentor Challenge, where I learned how to
            turn real-world designs into functional interfaces and improve my
            problem-solving skill.
          </p>
          <p>
            Over time, I've developed a strong foundation in HTML, CSS, and
            JavaScript, and I'm continuously improving by exploring modern tools
            and building projects that push me to grow. What I enjoy most about
            web development is breaking problems down, understanding how things
            work, and writing solutions that are clean, organized, and easy to
            maintain.
          </p>
          <p>
            I'm currently focused on sharpening my JavaScript skills and
            creating real-world projects that showcase my abilities. My
            long-term goal is to work with a team where I can contribute, learn,
            and build high-quality digital products.
          </p>
          <p>
            Outside of coding, I enjoy working on challenges that help me think
            differently, reading and watching movies.
          </p>
          <div className="skills">
            <div className="item d-flex flex-column">
              <b>Languages</b>
              <span>HTML, CSS, JavaScript, C++</span>
            </div>
            <div className="item d-flex flex-column">
              <b>Frameworks & Tools</b>
              <span>React.js, Next.js, Boostrap, SCSS</span>
            </div>
            <div className="item d-flex flex-column">
              <b>Database</b>
              <span>Firebase</span>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="./hero.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
