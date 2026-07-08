import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import useFancybox from "../hooks/useFancybox";
import { slugify } from "../utils/slugify";

function isVideo(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm");
}

function isLocalImage(src: string) {
  return !src.startsWith("http");
}

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
        <div className="modal-header">
          <h2>{project.name}</h2>
          <button className="modal-close" onClick={close}>X</button>
        </div>
        <p><strong>Type:</strong> {project.type}</p>
        <p className="modal-desc">{project.description}</p>
        <div className="modal-tech">{project.tech.join(" * ")}</div>

        <div className="modal-links" style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
          {project.links.map((link) => (
            <a key={link.label} className="modal-link" href={link.url} target="_blank" rel="noopener noreferrer">
              [{link.label}]
            </a>
          ))}
        </div>

        <div className="project-media" ref={setRoot}>
          {project.media?.map((src, i) => (
            <a key={i} href={src} data-fancybox={`gallery-${projectSlug}`}>
              {isVideo(src) ? (
                <video src={src} muted />
              ) : isLocalImage(src) ? (
                <img src={src} alt={`${project.name} #${i + 1}`} />
              ) : (
                <span className="media-placeholder">[no preview]</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}