import { experience } from '../data/content';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience__timeline">
          {experience.map((job, index) => (
            <div key={job.id} className="experience__item">
              <div className="experience__marker">
                <div className="experience__dot"></div>
                {index < experience.length - 1 && (
                  <div className="experience__line"></div>
                )}
              </div>

              <div className="experience__content card">
                <div className="experience__header">
                  <div className="experience__header-main">
                    <div className="experience__logo">
                      <img src={job.logo} alt={`${job.company} logo`} />
                    </div>
                    <div>
                      <h3 className="experience__title">{job.title}</h3>
                      <p className="experience__company">{job.company}</p>
                    </div>
                  </div>
                  <span className="experience__dates">{job.dates}</span>
                </div>

                <ul className="experience__responsibilities">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>

                <div className="experience__technologies">
                  {job.technologies.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
