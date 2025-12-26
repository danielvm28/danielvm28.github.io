import { education, leadership } from '../data/content';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education__grid">
          {education.map((school) => (
            <div 
              key={school.id} 
              className={`education__card card ${school.coursework.length === 0 ? 'education__card--compact' : ''}`}
            >
              <div className="education__header">
                <div className="education__logo">
                  <img src={school.logo} alt={`${school.institution} logo`} />
                </div>
                <div className="education__info">
                  <h3 className="education__degree">{school.degree}</h3>
                  <p className="education__institution">{school.institution}</p>
                  <p className="education__location">{school.location}</p>
                  <div className="education__meta">
                    <span className="education__dates">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {school.dates}
                    </span>
                    <span className="education__gpa">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      GPA: {school.gpa}
                    </span>
                    <span className="education__status">
                      {school.graduation}
                    </span>
                  </div>
                </div>
              </div>

              {school.coursework.length > 0 && (
                <div className="education__coursework">
                  <h4 className="education__coursework-title">Relevant Coursework</h4>
                  <div className="education__coursework-list">
                    {school.coursework.map((course, index) => (
                      <span key={index} className="education__course">{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="education__leadership">
          <h3 className="education__leadership-title">Leadership & Activities</h3>
          <div className="education__leadership-grid">
            {leadership.map((item) => (
              <div key={item.id} className="education__leadership-card card">
                <div className="education__leadership-header">
                  <div className="education__leadership-logo">
                    <img src={item.logo} alt={`${item.organization} logo`} />
                  </div>
                  <div className="education__leadership-info">
                    <h4>{item.title}</h4>
                    <span className="education__leadership-org">{item.organization}</span>
                    <span className="education__leadership-dates">{item.dates}</span>
                  </div>
                </div>
                <ul className="education__leadership-highlights">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education__leadership-link"
                  >
                    View Profile →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
