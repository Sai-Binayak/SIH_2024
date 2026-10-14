
import { useState } from 'react';
import './ContactUsStyle.css';

export function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect this handler to your backend or email service.
    console.log('Contact form submitted:', { name, email, message });

    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <main className="iu-contact-page">
      <div
        className="iu-contact-ornament iu-contact-ornament--one"
        aria-hidden="true"
      >
        ✺
      </div>

      <div
        className="iu-contact-ornament iu-contact-ornament--two"
        aria-hidden="true"
      >
        ✧
      </div>

      <section className="iu-contact-hero">
        <div className="iu-contact-intro">
          <p className="iu-contact-eyebrow">
            <span />
            LET&apos;S CONNECT
            <span />
          </p>

          <h1>
            Every celebration
            <br />
            starts with <em style={{color:"#f5d21b"}}>a connection.</em>
          </h1>

          <p className="iu-contact-lead">
            Have a festival to share, a story to tell, or an idea to
            bring to life? We’d love to hear from you. Let’s celebrate
            India’s vibrant traditions together.
          </p>

          <div className="iu-contact-divider" aria-hidden="true">
            <span>--------------------------------------------------------------------</span>
          </div>

          <div className="iu-contact-about">

            <div>
              <p className="iu-contact-small-label">
                A LITTLE ABOUT US
              </p>

              <h2>Culture brings us closer.</h2>

              <p>
                IndoUtsav is a journey through the colours, customs,
                and stories that make every Indian festival special.
                We help people discover traditions, find celebrations,
                and feel closer to the culture around them.
              </p>
            </div>
          </div>

          <div className="iu-contact-promise">
            <span
              className="iu-contact-promise-icon"
              aria-hidden="true"
            >
              ✉
            </span>

            <div>
              <strong>We’re listening.</strong>
              <p>
                Questions, suggestions, collaborations — every
                message matters.
              </p>
            </div>
          </div>
        </div>

        <div className="iu-contact-form-column">
          <div className="iu-contact-form-heading">
            <p className="iu-contact-form-kicker">
              YOUR STORY, OUR INBOX
            </p>

            <h2>
              Say <em style={{color:"#f5d21b"}}>hello.</em>
            </h2>

            <p>
              Share what’s on your mind. Our team would be glad
              to connect.
            </p>
            <br/>
          </div>

          <form
            className="iu-contact-form"
            onSubmit={handleSubmit}
          >
            {submitted && (
              <div className="iu-contact-success" role="status">
                Thank you for reaching out! Your message has been
                prepared. Connect this form to a backend or email
                service to deliver it to the team.
              </div>
            )}

            <div className="iu-contact-field">
              <label htmlFor="iu-contact-name">
                Your name <span>*</span>
              </label>

              <input
                id="iu-contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="What should we call you?"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setSubmitted(false);
                }}
                required
              />
            </div>

            <div className="iu-contact-field">
              <label htmlFor="iu-contact-email">
                Email address <span>*</span>
              </label>

              <input
                id="iu-contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubmitted(false);
                }}
                required
              />
            </div>

            <div className="iu-contact-field">
              <label htmlFor="iu-contact-message">
                What’s on your mind ?? <span>*</span>
              </label>

              <textarea
                id="iu-contact-message"
                name="message"
                placeholder="Tell us how we can make something wonderful together..."
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  setSubmitted(false);
                }}
                rows={5}
                required
              />
            </div>

            <button
              className="iu-contact-submit"
              type="submit"
            >
              <span>Send your message</span>
              <span
                className="iu-contact-submit-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </button>

            <p className="iu-contact-form-note">
              <span aria-hidden="true">✦</span>
              Made for meaningful connections.
            </p>
          </form>

          <p className="iu-contact-footer-note">
            <span />
            ROOTED IN CULTURE. CONNECTED BY CELEBRATION.
            <span />
          </p>
        </div>
      </section>
    </main>
  );
}
