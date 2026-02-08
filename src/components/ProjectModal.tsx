import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import useFancybox from "../hooks/useFancybox";
import { slugify } from "../utils/slugify";

export default function ProjectModal() {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const [setRoot] = useFancybox();

  const project = projects.find((p) => slugify(p.name) === projectSlug);

  const close = () => navigate("/projects");

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close}>X</button>
        
        <h2>{project.name}</h2>
        <p><strong>Type:</strong> {project.type}</p>
        <p className="modal-desc">{project.description}</p>
        <div className="modal-tech">{project.tech.join(" • ")}</div>

        <div className="modal-links" style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
          <a
            className="modal-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code {"->"}
          </a>
          
          {project.demo && (
            <a
              className="modal-link"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo {"->"}
            </a>
          )}
        </div>

        <div className="project-media" ref={setRoot}>
          {project.media?.map((src, i) => {
            const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

            return (
              <a
                key={i}
                href={src}
                data-fancybox={`gallery-${project.name}`}
              >
                {isVideo ? (
                  <video src={src} muted />
                ) : (
                  <img src={src} alt={`${project.name} #${i + 1}`} />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}