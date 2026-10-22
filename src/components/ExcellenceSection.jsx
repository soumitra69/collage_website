import React, { useState } from 'react';

const excellenceQuotes = [
  'During the 106th Indian Science Congress, Prime Minister Narendra Modi laid stress on research in the country and added "Jai Anusandhan" to the historic slogan "Jai Jawan, Jai Kisan, Jai Vigyan".',
  'Empowering young minds with world-class research facilities, global academic collaborations, and an unwavering commitment to holistic Jesuit education and societal transformation.',
  'Recognized with the highest Category-1 graded autonomy status, setting benchmarks in innovation, placements, and international academic excellence.',
];

export default function ExcellenceSection() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handlePrevQuote = () => {
    setQuoteIndex((prev) => (prev - 1 + excellenceQuotes.length) % excellenceQuotes.length);
  };

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % excellenceQuotes.length);
  };

  return (
    <div id="excellence">
      <section className="toghether">
        <div className="container">
          <div className="toghether-content">
            {/* Left Content */}
            <div className="toghether-left" data-aos="fade-right" data-aos-delay="150">
              <span className="section-eyebrow">OUR LEGACY</span>
              <h2>
                Together we have
                <br />
                achieved excellence
              </h2>
              <div className="toghether-img">
                <button
                  type="button"
                  className="quote-arrow-btn"
                  onClick={handlePrevQuote}
                  aria-label="Previous highlight"
                >
                  <img src="./Assets/Group 14.png" alt="Previous" />
                </button>
                <button
                  type="button"
                  className="quote-arrow-btn"
                  onClick={handleNextQuote}
                  aria-label="Next highlight"
                >
                  <img src="./Assets/Group 8.png" alt="Next" />
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="toghather-right" data-aos="fade-left" data-aos-delay="250">
              <div className="quote-box">
                <i className="fas fa-quote-left quote-icon"></i>
                <p key={quoteIndex} className="quote-fade">
                  {excellenceQuotes[quoteIndex]}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Wide Banner Image */}
          <div className="excellence-banner-wrapper" data-aos="fade-up" data-aos-delay="350">
            <img
              src="./Assets/Rectangle 25.png"
              alt="St. Xavier's Umoid Campus Excellence"
              className="excellence-main-banner"
            />
          </div>
        </div>
      </section>

      <section className="achievedment">
        <div className="container">
          <div className="achievedment-img">
            <div className="achievement-card first-img" data-aos="fade-up" data-aos-duration="900">
              <div className="achievement-img-wrap">
                <img src="./Assets/Rectangle 27.png" alt="Category 1 Autonomy Recognition" />
              </div>
              <p>
                The UGC has notified ST. XAVIER’S with the highest “Category 1” graded
                autonomy status.
              </p>
            </div>

            <div
              className="achievement-card second-img featured-achievement"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="achievement-img-wrap">
                <img src="./Assets/Rectangle 28.png" alt="National Leadership Recognition" />
                <div className="achievement-badge-overlay">
                  <span>NATIONAL HONOUR</span>
                </div>
              </div>
            </div>

            <div className="achievement-card third-img" data-aos="fade-up" data-aos-duration="900" data-aos-delay="150">
              <div className="achievement-img-wrap">
                <img src="./Assets/Rectangle 29.png" alt="Academic Distinction" />
              </div>
              <p>
                The UGC has notified ST. XAVIER’S with the highest “Category 1” graded
                autonomy status.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
