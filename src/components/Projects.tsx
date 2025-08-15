import { Typewriter } from "react-simple-typewriter";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      {"> "}
      <Typewriter
        key="projects"
        cursor
        cursorStyle="█"
        words={["ls Projects"]}
        typeSpeed={50}
      />
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <h3 className="project-title">
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.name}
                </a>
              </h3>
              <div className="project-type">{p.type}</div>
              <p className="project-description">{p.description}</p>
              <div className="project-tech">{p.tech.join(" • ")}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
