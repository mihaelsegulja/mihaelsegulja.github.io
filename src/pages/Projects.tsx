import { projects } from "../data/projects";
import TypewriterEffect from "../components/TypewriterEffect";
import { slugify } from "../utils/slugify";
import { Link, Outlet } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <TypewriterEffect uniqueKey="projects" words={["ls projects"]}/>
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((p) => (
            <Link 
              key={p.name} 
              to={`/projects/${slugify(p.name)}`} 
              className="project-card"
            >
              <h3 className="project-title">{p.name}</h3>
              <div className="project-type">{p.type}</div>
              <p className="project-description">{p.description}</p>
              <div className="project-tech">{p.tech.join(" • ")}</div>
            </Link>
          ))}
        </div>
      </div>

      <Outlet />
    </>
  );
}
