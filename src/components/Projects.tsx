import { Typewriter } from "react-simple-typewriter";
import { projects } from "../data/projects";
import { useState } from "react";
import useFancybox from "../hooks/useFancybox";
import type { ProjectProps } from "../types";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectProps | null>(null);
  const [setRoot] = useFancybox();

  return (
    <>
      <div>
      <b><span style={{ color: "var(--accent)"}}>{"> "}</span></b>
        <Typewriter
          key="projects"
          cursor
          cursorStyle="█"
          words={["ls Projects"]}
          typeSpeed={50}
        />
      </div>
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card" onClick={() => setActiveProject(p)}>
              <h3 className="project-title">{p.name}</h3>
              <div className="project-type">{p.type}</div>
              <p className="project-description">{p.description}</p>
              <div className="project-tech">{p.tech.join(" • ")}</div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>X</button>
            <h2>{activeProject.name}</h2>
            <p><strong>Type:</strong> {activeProject.type}</p>
            <p className="modal-desc">{activeProject.description}</p>
            <div className="modal-tech">{activeProject.tech.join(" • ")}</div>
            <a
              className="modal-link"
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code {"->"}
            </a>
            {activeProject.demo && (
              <a
                className="modal-link"
                href={activeProject.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo {"->"}
              </a>
            )}
            <div className="project-media" ref={setRoot}>
              {activeProject.media?.map((src, i) => (
                <a
                  key={i}
                  href={src}
                  data-fancybox={`gallery-${activeProject.name}`}
                  data-caption={`${activeProject.name} #${i + 1}`}
                >
                  <img src={src} alt={`${activeProject.name} #${i + 1}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
