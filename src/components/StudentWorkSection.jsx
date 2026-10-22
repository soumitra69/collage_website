import React, { useState } from 'react';

const subWorkCards = [
  {
    src: './Assets/Rectangle 61.png',
    title: 'Robotics & Automation Lab',
    category: 'Engineering',
  },
  {
    src: './Assets/Rectangle 62.png',
    title: 'Sustainable Campus Architecture',
    category: 'Design & Civil',
  },
  {
    src: './Assets/Rectangle 63.png',
    title: 'Smart Agriculture IoT Prototype',
    category: 'Agri-Tech',
  },
  {
    src: './Assets/Rectangle 64.png',
    title: 'National Hackathon Winners',
    category: 'Computer Science',
  },
];

const galleryImages = [
  { src: './Assets/Rectangle 71.png', title: 'Annual Convocation & Honours' },
  { src: './Assets/Rectangle 72.png', title: 'Inter-University Cultural Fest' },
  { src: './Assets/Rectangle 73.png', title: 'Science & Innovation Expo' },
  { src: './Assets/Rectangle 74.png', title: 'Community Leadership Drive' },
  { src: './Assets/Rectangle 75.png', title: 'International Student Exchange' },
  { src: './Assets/Rectangle 76.png', title: 'Championship Sports Meet' },
];

export default function StudentWorkSection() {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div id="student-work">
      <section className="student-work">
        <div className="container">
          <div className="student-work-content" data-aos="fade-down" data-aos-duration="900">
            <div>
              <span className="section-eyebrow">INNOVATION IN ACTION</span>
              <h3>STUDENTS WORK</h3>
            </div>
            <a href="#alumni" className="view-more-link">
              <span>View More</span>
              <img src="./Assets/weui_arrow-outlined.png" alt="Arrow" />
            </a>
          </div>

          <div className="student-card">
            {/* Large Main Image */}
            <div
              className="card-container"
              data-aos="zoom-in"
              data-aos-duration="900"
              onClick={() =>
                setLightboxImg({
                  src: './Assets/Rectangle 60.png',
                  title:
                    'The team from ST XAVIER\'S School of Engineering and Technology named as "MACH-RELOADED" registered for SUPRA SAE INDIA Formula-1 Type Race Car Event.',
                })
              }
            >
              <div className="image-wrapper">
                <img src="./Assets/Rectangle 60.png" alt="Students at work on Formula-1 race car" />
                <div className="caption">
                  <span className="caption-badge">FEATURED PROJECT</span>
                  <p>
                    The team from ST XAVIER&apos;S School of Engineering and Technology
                    named as &quot;MACH-RELOADED&quot; registered for SUPRA SAE INDIA 2012
                    Formula-1 Type Race Car Event in October, 2025 in February
                  </p>
                </div>
              </div>
            </div>

            {/* 2x2 Grid of Project Cards */}
            <div className="flex-card">
              {subWorkCards.map((item, idx) => (
                <div
                  key={item.src}
                  className="work-subcard"
                  data-aos="fade-up"
                  data-aos-delay={100 * (idx + 1)}
                  onClick={() => setLightboxImg(item)}
                >
                  <img src={item.src} alt={item.title} />
                  <div className="work-subcard-overlay">
                    <span className="work-tag">{item.category}</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="student-work-image-section">
        <div className="container">
          <div className="student-work-image">
            {galleryImages.map((img, index) => (
              <div
                key={img.src}
                className="gallery-grid-item"
                data-aos="zoom-in"
                data-aos-delay={80 * (index + 1)}
                onClick={() => setLightboxImg(img)}
              >
                <img src={img.src} alt={img.title} />
                <div className="gallery-item-hover">
                  <i className="fas fa-expand-alt"></i>
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxImg(null)}
              aria-label="Close preview"
            >
              <i className="fas fa-times"></i>
            </button>
            <img src={lightboxImg.src} alt={lightboxImg.title} />
            <p className="lightbox-caption">{lightboxImg.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
