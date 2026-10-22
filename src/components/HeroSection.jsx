import React, { useState, useEffect } from 'react';

const bannerImages = [
  './Assets/Banner 1.png',
  './Assets/Banner 2.png',
  './Assets/Banner 3.png',
  './Assets/Banner 4.png',
];

const accreditationSlides = [
  {
    id: 0,
    subtitle: "ASIA'S ONLY\nUNIVERSITY WITH THE",
    lines: ['HIGHEST', 'US AND UK', 'ACCREDITATION'],
    img: './Assets/wasc 1.png',
    alt: 'WASC Accreditation',
  },
  {
    id: 1,
    subtitle: '',
    lines: ['RANKED', 'INDIAN NO.1', 'PRIVATE', 'UNIVERSITY'],
    img: './Assets/wasc 2.png',
    alt: 'Ranked No. 1 Private University',
  },
  {
    id: 2,
    subtitle: 'RANKED AMONGST THE',
    lines: ['TOP 3', 'UNIVERSITY', 'GLOBALLY'],
    img: './Assets/wasc 3.png',
    alt: 'Top 3 University Globally',
  },
  {
    id: 3,
    subtitle: "ASIA'S ONLY\nUNIVERSITY WITH THE",
    lines: ['HIGHEST', 'RECOGNITION'],
    img: './Assets/wasc 3.png',
    alt: 'Highest Recognition',
  },
];

export default function HeroSection({ formRef }) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: '',
    city: '',
    discipline: '',
    program: '',
  });

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(bannerTimer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % accreditationSlides.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        city: '',
        discipline: '',
        program: '',
      });
    }, 4500);
  };

  return (
    <div className="hero-section" id="apply-form">
      {/* Background Crossfade Slideshow */}
      <div className="hero-bg-slideshow">
        {bannerImages.map((imgUrl, idx) => (
          <div
            key={imgUrl}
            className={`hero-bg-layer ${idx === currentBanner ? 'active' : ''}`}
            style={{ backgroundImage: `url("${imgUrl}")` }}
          />
        ))}
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container">
        {/* Left: Accreditation Vertical Slider */}
        <div className="hero-left-column" data-aos="fade-right" data-aos-duration="1000">
          <div className="slider-container">
            {accreditationSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="slide-content">
                  <div className="content-wrapper">
                    {slide.subtitle && (
                      <div className="subtitle">
                        {slide.subtitle.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i === 0 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                    <div className="slide-headings">
                      {slide.lines.map((line, idx) => (
                        <h3 key={idx}>{line}</h3>
                      ))}
                    </div>
                    <div className="slide-badge-wrapper">
                      <img src={slide.img} alt={slide.alt} />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="navigation-dots">
              {accreditationSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Show accreditation slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Registration Form */}
        <div
          className="registration-form"
          ref={formRef}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="form-header">
            <h2>Apply Today for</h2>
            <h3>
              ST. XAVIER'S UMOID
              <br />
              PROGRAMS
            </h3>
            <div className="registration-date">
              <i className="far fa-calendar-alt"></i> Registration End Date: (Phase - 2): 10th October
            </div>
          </div>

          {submitted ? (
            <div className="form-success-card">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h4>Application Received!</h4>
              <p>
                Thank you for applying to <strong>ST. XAVIER'S UMOID</strong>. Our admissions counselor will contact you shortly via Email &amp; SMS.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="STUDENT NAME"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="STUDENT EMAIL ID"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="STUDENT MOBILE NO"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="STUDENT DOB"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="STUDENT CITY"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <select
                    name="discipline"
                    value={formData.discipline}
                    onChange={handleChange}
                    required
                  >
                    <option value="">SELECT DISCIPLINE</option>
                    <option value="engineering">Engineering &amp; Technology</option>
                    <option value="business">Business &amp; Management</option>
                    <option value="arts">Arts &amp; Humanities</option>
                    <option value="sciences">Pure &amp; Applied Sciences</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                  >
                    <option value="">SELECT PROGRAM</option>
                    <option value="undergraduate">Undergraduate (B.Tech / BBA / BA)</option>
                    <option value="postgraduate">Postgraduate (M.Tech / MBA / MA)</option>
                    <option value="doctoral">Doctoral (Ph.D)</option>
                  </select>
                </div>
              </div>

              <div className="terms">
                By submitting this form, I agree to receive notifications from the
                university in the form of SMS/Email/Call.
              </div>

              <button type="submit" className="submit-btn btn-shine">
                APPLY NOW <i className="fas fa-arrow-right"></i>
              </button>

              <div className="login-link">
                Already Registered? <a href="#apply-form">Click to Login</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
