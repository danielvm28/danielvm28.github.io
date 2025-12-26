import { aboutMe, leadership } from '../data/content';
import './About.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about__content">
          <div className="about__text">
            <p className="about__bio">{aboutMe.bio}</p>
            <p className="about__personal">{aboutMe.personal}</p>
          </div>

          <div className="about__stats">
            {aboutMe.stats.map((stat, index) => (
              <div key={index} className="about__stat">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__leadership">
          <h3 className="about__leadership-title">Leadership & Activities</h3>
          <div className="about__leadership-grid">
            {leadership.map((item) => (
              <div key={item.id} className="about__leadership-card card">
                <div className="about__leadership-header">
                  <div className="about__leadership-logo">
                    <img src={item.logo} alt={`${item.organization} logo`} />
                  </div>
                  <div className="about__leadership-info">
                    <h4>{item.title}</h4>
                    <span className="about__leadership-org">{item.organization}</span>
                    <span className="about__leadership-dates">{item.dates}</span>
                  </div>
                </div>
                <ul className="about__leadership-highlights">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about__leadership-link"
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

export default About;
