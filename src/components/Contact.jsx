import { useState } from 'react';
import { personalInfo } from '../data/content';
import './Contact.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqekkyvv';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact__content">
          <div className="contact__info">
            <p className="contact__intro">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology. Feel free to reach out!
            </p>

            <div className="contact__methods">
              <a href={`mailto:${personalInfo.email}`} className="contact__method">
                <div className="contact__method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="contact__method-label">Email</span>
                  <span className="contact__method-value">{personalInfo.email}</span>
                </div>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact__method">
                <div className="contact__method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact__method-label">LinkedIn</span>
                  <span className="contact__method-value">Connect with me</span>
                </div>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact__method">
                <div className="contact__method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact__method-label">GitHub</span>
                  <span className="contact__method-value">View my code</span>
                </div>
              </a>
            </div>
          </div>

          {status === 'success' ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon!</p>
              <button 
                className="btn btn-secondary" 
                onClick={() => setStatus('idle')}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className="contact__error">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
              
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="Your name"
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="your@email.com"
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  placeholder="Your message..."
                  rows="5"
                  required
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary contact__submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <span className="contact__spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
