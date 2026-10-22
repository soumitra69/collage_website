import React from 'react';

const statsData = [
  { number: '150+', label: 'Programs', delay: 200 },
  { number: '980+', label: 'Stalwarts', delay: 350 },
  { number: '1710+', label: 'Faculty', delay: 500 },
];

const certificates = [
  { src: './Assets/rank-in-profit-logo 1.png', alt: 'Ranked in Top Universities' },
  { src: './Assets/top-placement-logo 1.png', alt: 'Top Placement Record' },
  { src: './Assets/international-universities-logo 1.png', alt: 'International University Tie-ups' },
  { src: './Assets/given-scholar-logo 1.png', alt: 'Scholarships Awarded' },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="why-us-section">
      <div
        className="hero"
        style={{ backgroundImage: 'url("./Assets/Rectangle 31.png")' }}
      >
        <div className="hero-dark-overlay"></div>
        <div className="container why-us-container">
          {/* Left Content */}
          <div className="left-content" data-aos="fade-right" data-aos-duration="1000">
            <h3>WHY ST. XAVIER'S UMOID</h3>
            <p className="why-us-desc">
              Grooming leaders who are not only thorough professionals but also good
              human beings with values.
            </p>

            <div className="rank-no1" data-aos="zoom-in" data-aos-delay="200">
              <p className="rank-text">
                This is why we are
                <br />
                consistently ranked
              </p>
              <span className="rank-big-number">No.1</span>
            </div>

            <a href="#apply-form" className="read-button btn-shine" data-aos="fade-up" data-aos-delay="300">
              <span>Read More about ST. XAVIER'S UMOID</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          {/* Divider */}
          <div className="why-us-divider" data-aos="fade-in" data-aos-delay="250"></div>

          {/* Center Stats */}
          <div className="stats-container">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="stat-box"
                data-aos="fade-up"
                data-aos-delay={stat.delay}
              >
                <div className="number">{stat.number}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right Certificates */}
          <div className="right-content" data-aos="fade-left" data-aos-duration="1000">
            <div className="certificate-box">
              {certificates.map((cert, index) => (
                <div
                  key={cert.src}
                  className="cert-item"
                  data-aos="flip-left"
                  data-aos-delay={150 * (index + 1)}
                >
                  <img src={cert.src} alt={cert.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
