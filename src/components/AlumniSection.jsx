import React, { useState } from 'react';

const alumniData = [
  {
    id: 0,
    name: 'Tayna Arora',
    role: 'Software Engineer (2023 Batch)',
    company: 'Microsoft',
    featuredImage: './Assets/Rectangle 93.png',
    avatar: './Assets/Rectangle 88.png',
    quote:
      "Choosing ST.XAVIER'S has benefited me in different ways. It equipped me with a toolkit of leadership and organizational skills which helps me tackle my day-to-day work. It put me in a well connected network where I found my voice.",
  },
  {
    id: 1,
    name: 'Aditya Sen',
    role: 'Product Manager (2022 Batch)',
    company: 'Google',
    featuredImage: './Assets/Rectangle 89.png',
    avatar: './Assets/Rectangle 89.png',
    quote:
      "My journey at ST. XAVIER'S UMOID transformed my perspective on innovation and problem-solving. The faculty mentorship and interdisciplinary projects gave me the confidence to lead global product teams.",
  },
  {
    id: 2,
    name: 'Vinod Prasad',
    role: 'Senior Data Scientist (2021 Batch)',
    company: 'Amazon',
    featuredImage: './Assets/Rectangle 90.png',
    avatar: './Assets/Rectangle 90.png',
    quote:
      "The rigorous academic curriculum combined with hands-on research laboratories prepared me for complex industry challenges. Our placement cell and alumni network opened doors to incredible global careers.",
  },
  {
    id: 3,
    name: 'Deme',
    role: 'International Research Fellow (2023 Batch)',
    company: 'Oxford University',
    featuredImage: './Assets/Rectangle 91.png',
    avatar: './Assets/Rectangle 91.png',
    quote:
      "ST. XAVIER'S fostered my passion for scientific inquiry from day one. The values, ethics, and academic excellence instilled here continue to guide my doctoral research abroad.",
  },
];

export default function AlumniSection() {
  const [selectedAlumni, setSelectedAlumni] = useState(0);

  const handlePrev = () => {
    setSelectedAlumni((prev) => (prev - 1 + alumniData.length) % alumniData.length);
  };

  const handleNext = () => {
    setSelectedAlumni((prev) => (prev + 1) % alumniData.length);
  };

  const current = alumniData[selectedAlumni];

  return (
    <section className="alumini" id="alumni">
      <div className="container">
        {/* Header Section */}
        <div className="alumini-header" data-aos="fade-down" data-aos-duration="900">
          <h1>ST. XAVIER&apos;S UMOID Family Speaks</h1>
          <nav className="navigation" aria-label="Testimonial Navigation">
            <button
              type="button"
              className="nav-btn"
              onClick={handlePrev}
              aria-label="Previous Alumni Testimonial"
            >
              ←
            </button>
            <button
              type="button"
              className="nav-btn"
              onClick={handleNext}
              aria-label="Next Alumni Testimonial"
            >
              →
            </button>
          </nav>
        </div>

        {/* Main Testimonial Section */}
        <div className="main-content" data-aos="zoom-in" data-aos-duration="800">
          <div className="featured-section" key={current.id}>
            <div className="profile-image">
              <img src={current.featuredImage} alt={current.name} />
            </div>

            <div className="content-area">
              <span className="badge">ALUMNI</span>
              <p className="testimonial">{current.quote}</p>
              <hr className="testimonial-hr" />
              <div className="profile-info">
                <h2>{current.name}</h2>
                <p className="role">{current.role}</p>
                <p className="company">{current.company}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Alumni Gallery Selector */}
        <div className="alumni-gallery">
          {alumniData.map((person, index) => (
            <button
              key={person.id}
              type="button"
              className={`alumni-card ${selectedAlumni === index ? 'active-alumni' : ''}`}
              onClick={() => setSelectedAlumni(index)}
              data-aos="flip-left"
              data-aos-delay={100 * (index + 1)}
            >
              <img
                src={person.avatar}
                alt={person.name}
                className="alumni-image"
              />
              <div className="alumni-card-meta">
                <p className="alumni-name">{person.name}</p>
                <span className="alumni-company-tag">{person.company}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
