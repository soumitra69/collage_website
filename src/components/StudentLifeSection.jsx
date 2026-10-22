import React from 'react';

export default function StudentLifeSection() {
  return (
    <section className="student" id="campus-life">
      <div className="container">
        <div className="section-title-row" data-aos="fade-down" data-aos-duration="900">
          <h3 className="student-h3">STUDENT LIFE</h3>
          <p className="student-subtitle">
            Experience a vibrant campus ecosystem blending academics, culture, sports, and community.
          </p>
        </div>

        <div className="student-bento-grid">
          {/* Left Column: Tall Card (STUDY) */}
          <div
            className="student-card-item tall-card"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <img src="./Assets/Rectangle 40.png" alt="Study at St. Xavier's" />
            <div className="student-card-overlay">
              <p>World-class libraries, smart classrooms &amp; collaborative learning spaces.</p>
            </div>
            <div className="student-badge">
              <span>STUDY</span>
            </div>
          </div>

          {/* Center Column: Top Wide (EVENTS) + Bottom 2 Cards (HOSTEL, SPORTS) */}
          <div className="student-center-col">
            <div
              className="student-card-item wide-card"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="150"
            >
              <img src="./Assets/Rectangle 41.png" alt="Campus Events and Cultural Fests" />
              <div className="student-card-overlay">
                <p>Annual cultural festivals, symposiums, concerts &amp; leadership summits.</p>
              </div>
              <div className="student-badge">
                <span>EVENTS</span>
              </div>
            </div>

            <div className="student-bottom-split">
              <div
                className="student-card-item half-card"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="250"
              >
                <img src="./Assets/Rectangle 42.png" alt="Campus Hostel Facilities" />
                <div className="student-card-overlay">
                  <p>Safe, comfortable &amp; modern residential halls with 24/7 amenities.</p>
                </div>
                <div className="student-badge">
                  <span>HOSTEL</span>
                </div>
              </div>

              <div
                className="student-card-item half-card"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="350"
              >
                <img src="./Assets/Rectangle 43.png" alt="Sports and Athletics" />
                <div className="student-card-overlay">
                  <p>Championship grounds, indoor arenas &amp; professional athletic coaching.</p>
                </div>
                <div className="student-badge">
                  <span>SPORTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tall Card (MORE) */}
          <div
            className="student-card-item tall-card"
            data-aos="zoom-in"
            data-aos-duration="900"
            data-aos-delay="450"
          >
            <img src="./Assets/Rectangle 44.png" alt="More Campus Experiences" />
            <div className="student-card-overlay">
              <p>Student clubs, social outreach, innovation labs &amp; global exchange.</p>
            </div>
            <div className="student-badge">
              <span>MORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
