const experiences = [
  {
    title: "Java Full Stack Developer Intern",
    desc: "Worked on React.js, Spring Boot, MySQL, REST APIs and RFID based applications.",
  },
  {
    title: "Software Engineer - Capgemini",
    desc: "Worked on software development, debugging and application support.",
  },
  {
    title: "Full Stack RFID Projects",
    desc: "Handled billing and RFID labeling projects using Java Spring Boot and React.js.",
  },
];

function Experience() {
  return (
    <section className="section light-section" id="experience">
      <p className="section-subtitle">Career path</p>
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <span className="timeline-dot"></span>
            <h3>{exp.title}</h3>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;