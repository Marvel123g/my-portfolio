import React from "react";

const stacks = [
  { name: "Chart.js", img: "./chartjs.png" },
  { name: "Firebase", img: "./firebase.png" },
  { name: "HTML", img: "./html.png" },
  { name: "Sass", img: "./sass.png" },
  { name: "Bootstrap", img: "./bootstrap.png" },
  { name: "Next.js", img: "./next.png" },
  { name: "React", img: "./react.png" },
  { name: "CSS", img: "./css.png" },
  { name: "Framer Motion", img: "./framer.png" },
  { name: "Tailwind", img: "./tailwind.png" },
  { name: "JavaScript", img: "./js.png" },
  { name: "TypeScript", img: "./ts.png" },
];

export default function Stacks() {
  return (
    <section className="stacks-section">
      <h3 className="title">Technology Stacks</h3>

      <div className="box">
        {stacks.map((stack, index) => (
          <div className="card" key={index}>
            <img src={stack.img} alt={`${stack.name} logo`} />
            <p>{stack.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}