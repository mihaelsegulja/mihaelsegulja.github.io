import { projects } from "../data/projects";
import TypewriterEffect from "../components/TypewriterEffect";
import { slugify } from "../utils/slugify";
import { Link, Outlet } from "react-router-dom";

function isLocalImage(src: string) {
  return !src.startsWith("http") && !src.endsWith(".mp4") && !src.endsWith(".webm");
}

export default function Projects() {
  return (
    <>
      <TypewriterEffect uniqueKey="projects" words={["ls projects"]}/>
      <div className="content-container">
        <div className="projects-grid">
          {projects.map((p) => {
            const hasImagePreview = p.media?.some((m) => isLocalImage(m));
            const firstImage = p.media?.find((m) => isLocalImage(m));

            return (
              <Link 
                key={p.name} 
                to={`${slugify(p.name)}`} 
                className="project-card"
              >
                <div className="card-preview">
                  {hasImagePreview && firstImage ? (
                    <img src={firstImage} alt="" />
                  ) : (
                    <span className="card-placeholder">{">_"} </span>
                  )}
                </div>
                <h3 className="project-title">{p.name}</h3>
                <div className="project-type">{p.type}</div>
                <p className="project-description">{p.description}</p>
                <div className="project-tech">{p.tech.join(" * ")}</div>
              </Link>
            );
          })}
        </div>
      </div>

      <Outlet />
    </>
  );
}
