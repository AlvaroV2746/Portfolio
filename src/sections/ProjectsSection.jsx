import ProjectCard from './ProjectCard';
import { projects } from '../data/projects.data';
import './projects.css';

const ProjectsSection = () => (
  <section id="proyectos" className="pf-section pf-section--alt">
    <div className="container">
      <header className="pf-projects__head">
        <span className="pf-eyebrow">03 — PROYECTOS</span>
        <h2>Lo que he construido</h2>
        <p>Tres sistemas en producción, cada uno con su demo en vivo y su código abierto.</p>
      </header>

      <div className="row g-4">
        {projects.map((project, i) => (
          <div className="col-12 col-md-6 col-lg-4 d-flex" key={project.id}>
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
