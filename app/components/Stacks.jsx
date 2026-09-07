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
    <section className="stacks-section" aria-labelledby="stacks-title">
      <div className="stacks-inner" data-aos="fade-up">
        <div className="section-heading compact-heading">
          <span className="section-kicker">TOOLS I WORK WITH</span>
          <h2 id="stacks-title" className="title">Technology Stacks</h2>
        </div>

        <div className="box">
          {stacks.map((stack) => (
            <div className="card" key={stack.name}>
              <div className="stack-icon-wrap">
                <img src={stack.img} alt={`${stack.name} logo`} />
              </div>
              <p>{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
