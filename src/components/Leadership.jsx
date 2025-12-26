import { leadership } from '../data/content';
import './Leadership.css';

function Leadership() {
  return (
    <section id="leadership" className="leadership section">
      <div className="container">
        <h2 className="section-title">Leadership & Activities</h2>

        <div className="leadership__grid">
          {leadership.map((item) => (
            <div key={item.id} className="leadership__card card">
              <div className="leadership__header">
                <div className="leadership__logo">
                  <img src={item.logo} alt={`${item.organization} logo`} />
                </div>
                <div className="leadership__info">
                  <h4>{item.title}</h4>
                  <span className="leadership__org">{item.organization}</span>
                  <span className="leadership__dates">{item.dates}</span>
                </div>
              </div>
              <ul className="leadership__highlights">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leadership__link"
                >
                  View Profile →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;

