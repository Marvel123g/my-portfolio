import React from "react";

export default function About() {
  return (
    <div className="about d-flex align-center flex-column" id="about">
      <h2>About me</h2>
      <div className="about-content d-flex align-center" >
        <div className="text" data-aos= "fade-up">
          <p>
            I'm a passionate and detail-oriented frontend developer who enjoys
            building clean, responsive, and user-friendy web experiences. My
            journey began with small projects and coding challenges on a
            platform called Frontend Mentor Challenge, where I learned how to
            turn real-world designs into functional interfaces and improve my
            problem-solving skill.
          </p>
          <p>
            Over time, I've developed a strong foundation in HTML, CSS, and
            JavaScript, and I enjoy creating applications that are both visually appealing and easy to maintain. What I enjoy most about web development is understanding how things work, breaking complex problems into manageable parts, and writing solutions that are clean, organized, and easy to maintain.
          </p>
          <p>
            Beyond frontend development, I'm expanding my skills with React Native and gaining practical knowledge of backend concepts such as APIs, authentication, databases, and server-side development. While my primary focus remains frontend development, I enjoy learning how different parts of an application work together to deliver a complete user experience.
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
        </div>
        <div className="image">
          <img src="./hero.png" alt=""  data-aos="fade-up"/>
        </div>
      </div>
    </div>
  );
}
