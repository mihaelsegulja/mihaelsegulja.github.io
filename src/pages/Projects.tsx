import { Helmet } from "react-helmet-async";
import { projects } from "../data/projects";
import TypewriterEffect from "../components/TypewriterEffect";
import { slugify } from "../utils/slugify";
import { Link, Outlet } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Mihael Šegulja</title>
        <meta name="description" content="A collection of projects by Mihael Šegulja — web apps, mobile apps, IoT, desktop applications, and more." />
      </Helmet>
      <TypewriterEffect uniqueKey="projects" words={["ls projects"]}/>
      <div className="content-container">
        <div className="projects-grid">
          {projects.map((p) => (
            <Link 
              key={p.name} 
              to={`${slugify(p.name)}`} 
              className="project-card"
            >
              <h3 className="project-title">{p.name}</h3>
              <div className="project-type">{p.type}</div>
              <p className="project-description">{p.description}</p>
              <div className="project-tech">{p.tech.join(" * ")}</div>
            </Link>
          ))}
        </div>
      </div>

      <Outlet />
    </>
  );
}
