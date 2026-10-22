import React, { useState } from 'react';

const researchCategories = [
  {
    title: 'International Research',
    description:
      '5020 management case-studies covering domains like Strategy, Marketing, Economics & Finance and others, bought across 123 countries.',
  },
  {
    title: 'Indian Research',
    description:
      'Pioneering indigenous solutions in sustainable agriculture, clean energy, regional socio-economic growth, and Northeast biodiversity.',
  },
  {
    title: 'Patent',
    description:
      'Over 800+ patents filed by faculty and students across AI, biotechnology, smart materials, and rural innovation.',
  },
];

const researchGalleryPairs = [
  [
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=320&fit=crop',
      alt: 'Collaborative Research Symposium',
      tag: 'Global Symposium',
    },
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=320&fit=crop',
      alt: 'Academic Conference Session',
      tag: 'Keynote Lecture',
    },
  ],
  [
    {
      url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=320&fit=crop',
      alt: 'Advanced Science Laboratory',
      tag: 'Biotech Lab',
    },
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=320&fit=crop',
      alt: 'Engineering Innovation Hub',
      tag: 'Innovation Hub',
    },
  ],
];

const metrics = [
  { value: '45000', label: 'Research Publications' },
  { value: '500', label: 'Books in diverse area' },
  { value: '500', label: 'Govt. Funded Research Projects' },
  { value: '800+', label: 'Patents Filed by Brilliant Students' },
];

export default function ResearchSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [galleryPage, setGalleryPage] = useState(0);

  const handlePrevGallery = () => {
    setGalleryPage((prev) => (prev - 1 + researchGalleryPairs.length) % researchGalleryPairs.length);
  };

  const handleNextGallery = () => {
    setGalleryPage((prev) => (prev + 1) % researchGalleryPairs.length);
  };

  return (
    <section className="resherch" id="research">
      <div className="container">
        <div className="main-wrapper">
          {/* Left Content */}
          <div className="content-left" data-aos="fade-right" data-aos-duration="900">
            <div className="header-section">
              <h1>RESEARCH</h1>
              <h2>SPOTLIGHT</h2>
            </div>

            <div className="text-content" key={activeCategory}>
              {researchCategories[activeCategory].description}
            </div>

            <div className="menu-links">
              {researchCategories.map((cat, idx) => (
                <button
                  key={cat.title}
                  type="button"
                  className={`menu-option ${activeCategory === idx ? 'active' : ''}`}
                  onClick={() => setActiveCategory(idx)}
                >
                  <span>{cat.title}</span>
                  <span className="menu-arrow">›</span>
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="vertical-separator" data-aos="fade-in"></div>

          {/* Right Content */}
          <div className="content-right" data-aos="fade-left" data-aos-duration="900">
            {/* Metrics */}
            <div className="metrics-container">
              {metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className="metric-block"
                  data-aos="zoom-in"
                  data-aos-delay={100 * (idx + 1)}
                >
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <div className="gallery-section">
              {researchGalleryPairs[galleryPage].map((photo) => (
                <div key={photo.url} className="photo-container">
                  <img src={photo.url} alt={photo.alt} />
                  <span className="photo-tag">{photo.tag}</span>
                </div>
              ))}

              <div className="controls-area">
                <div className="arrow-controls">
                  <button
                    type="button"
                    className="arrow-button"
                    onClick={handlePrevGallery}
                    aria-label="Previous research photos"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="arrow-button"
                    onClick={handleNextGallery}
                    aria-label="Next research photos"
                  >
                    →
                  </button>
                </div>
                <a href="#student-work" className="resource-link">
                  View All Resources <span>›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
