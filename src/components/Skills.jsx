import { skills, skillIcons } from '../data/content';
import './Skills.css';

function Skills() {
  const skillCategories = [
    { title: 'Programming Languages', items: skills.languages, icon: '$' },
    { title: 'Databases', items: skills.databases, icon: 'db' },
    { title: 'Frameworks & Libraries', items: skills.frameworks, icon: '{}' },
    { title: 'Tools & Platforms', items: skills.tools, icon: '>' },
  ];

  const getSkillIcon = (skill) => {
    return skillIcons[skill] || null;
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills__category">
              <h3 className="skills__category-title">
                <span className="skills__category-icon">{category.icon}</span>
                {category.title}
              </h3>
              <div className="skills__list">
                {category.items.map((skill, idx) => {
                  const iconClass = getSkillIcon(skill);
                  return (
                    <span key={idx} className="skills__item">
                      {iconClass && <i className={iconClass}></i>}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__extra">
          <div className="skills__certifications">
            <h3 className="skills__category-title">
              <span className="skills__category-icon">★</span>
              Certifications
            </h3>
            <div className="skills__cert-list">
              {skills.certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skills__cert-badge"
                >
                  <i className="devicon-amazonwebservices-plain-wordmark"></i>
                  {cert.name}
                </a>
              ))}
            </div>
          </div>

          <div className="skills__languages">
            <h3 className="skills__category-title">
              <span className="skills__category-icon">🌐</span>
              Languages
            </h3>
            <div className="skills__lang-list">
              {skills.spokenLanguages.map((lang, index) => (
                <span key={index} className="skills__lang-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
