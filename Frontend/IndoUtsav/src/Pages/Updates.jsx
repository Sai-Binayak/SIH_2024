
import './Updates.css';

const festivalUpdates = [
  {
    category: 'NORTH-EAST INDIA',
    title: 'Cherry Blossom Festival',
    description:
      'Discover Meghalaya dressed in soft pink blooms, with live music, local culture, and unforgettable hill-country views.',
    image: 'src/Images/Washington DC during the Cherry Blossom blooms….jpg',
    alt: 'Cherry blossoms in bloom',
    link: 'https://nationalcherryblossomfestival.org/',
  },
  {
    category: 'KERALA',
    title: 'Chettikulangara Bharani',
    description:
      'Explore a vibrant temple festival known for its striking Kettukazhcha displays, traditional art, and community spirit.',
    image: 'src/Images/download.jpg',
    alt: 'Traditional festival celebration in Kerala',
    link: 'https://www.keralatourism.org/event/chettikulangara-bharani/10',
  },
  {
    category: 'GUJARAT',
    title: 'Rann Utsav',
    description:
      'Experience the white salt desert through folk performances, regional crafts, local cuisine, and colourful cultural evenings.',
    image: 'src/Images/licensed-image.jpg',
    alt: 'Rann Utsav cultural celebration',
    link: 'https://utsav.gov.in/view-event/rann-utsav-1',
  },
];

export function Updates() {
  return (
    <main className="iu-updates-page">
      <div
        className="iu-updates-ornament iu-updates-ornament--one"
        aria-hidden="true"
      >
        ✺
      </div>

      <div
        className="iu-updates-ornament iu-updates-ornament--two"
        aria-hidden="true"
      >
        ✧
      </div>

      <section className="iu-updates-hero">
        <div className="iu-updates-hero-copy">
          <p className="iu-updates-eyebrow">
            <span />
            STORIES, FESTIVALS &amp; CULTURE
            <span />
          </p>

          <h1>
            India has a story
            <br />
            for <em>every celebration.</em>
          </h1>

          <p className="iu-updates-hero-description">
            Go beyond the familiar. Discover remarkable festivals,
            living traditions, and cultural experiences from every
            corner of India.
          </p>

          <a className="iu-updates-hero-cta" href="#latest-updates">
            Explore the latest
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="iu-updates-hero-art" aria-label="Festival artwork">
          <img
            src="src/Images/Cartoon Style Qixi Festival Publicity Snsbanner _ PSD Free Download - Pikbest.jpg"
            alt="Illustrated festival celebration"
          />

          <div className="iu-updates-art-caption">
            <span className="iu-updates-art-dot" />
            <span>ROOTED IN CULTURE. ALIVE IN CELEBRATION.</span>
          </div>
        </div>
      </section>

      <section className="iu-updates-listing" id="latest-updates">
        <div className="iu-updates-section-heading">
          <div>
            <p className="iu-updates-eyebrow">
              <span />
              THE CULTURE EDIT
            </p>

            <h2>
              Latest <em>updates</em>
            </h2>

            <p className="iu-updates-section-description">
              A little inspiration for your next cultural discovery.
            </p>
          </div>

          <span
            className="iu-updates-section-mark"
            aria-hidden="true"
          >
            !!!
          </span>
        </div>

        <div className="iu-updates-grid">
          {festivalUpdates.map((item, index) => (
            <article className="iu-update-card" key={item.title}>
              <a
                className="iu-update-image-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Explore ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />

                <span className="iu-update-number">
                  0{index + 1}
                </span>

                <span
                  className="iu-update-image-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

              <div className="iu-update-card-content">
                <p className="iu-update-category">
                  {item.category}
                </p>

                <h3>{item.title}</h3>

                <p className="iu-update-description">
                  {item.description}
                </p>

                <a
                  className="iu-update-read-more"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discover festival
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="iu-updates-bottom-note">
          <span aria-hidden="true">✦</span>

          <p>
            Every tradition has a story.{' '}
            <em>Come discover yours.</em>
          </p>

          <span aria-hidden="true">✦</span>
        </div>
      </section>
    </main>
  );
}
