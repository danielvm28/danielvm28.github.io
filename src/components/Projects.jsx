import { projects } from '../data/content';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="projects__card card">
              <div className="projects__card-image">
                <img src={project.image} alt={project.name} />
              </div>

              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.name}</h3>
                <p className="projects__card-description" dangerouslySetInnerHTML={{ __html: project.description }} />

                <div className="projects__card-tech">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="projects__card-footer">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    View Project
                  </a>
                ) : (
                  <span className="projects__card-no-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    Private Project
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
