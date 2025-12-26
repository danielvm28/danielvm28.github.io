import { aboutMe } from '../data/content';
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
      </div>
    </section>
  );
}

export default About;
