import React, { useState, useEffect } from 'react';

const alertMessages = [
  'Registration Open for Ph.D Admission - Spring Term (January 2026 Intake)',
  'New Scholarship Program Available for 2025-26 Academic Year',
  'Campus Tour Dates Announced - Register Now!',
  'Applications Open for Undergraduate & Postgraduate Programs 2026',
];

export default function AlertBar({ onRegisterClick }) {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [animating, setAnimating] = useState(false);

  const changeSlide = (newIndex) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentAlert(newIndex);
      setAnimating(false);
    }, 200);
  };

  const handlePrev = () => {
    changeSlide((currentAlert - 1 + alertMessages.length) % alertMessages.length);
  };

  const handleNext = () => {
    changeSlide((currentAlert + 1) % alertMessages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAlert((prev) => (prev + 1) % alertMessages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="alert-bar" data-aos="fade-down" data-aos-duration="800">
      <div className="container">
        <div className="alert-row">
          <div className="alert-content">
            <div className="alert-carousel">
              <button
                className="carousel-control prev"
                onClick={handlePrev}
                aria-label="Previous announcement"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className={`alert-message ${animating ? 'fade-out' : 'fade-in'}`}>
                <span className="pulse-dot" aria-hidden="true"></span>
                <p className="alert-text">{alertMessages[currentAlert]}</p>
                <button
                  type="button"
                  className="register-btn btn-shine"
                  onClick={onRegisterClick}
                >
                  REGISTER NOW
                </button>
              </div>
              <button
                className="carousel-control next"
                onClick={handleNext}
                aria-label="Next announcement"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="utility-section">
            <div className="utility-links">
              <a href="https://wa.me/919436585717" target="_blank" rel="noreferrer" className="utility-link">
                <i className="fab fa-whatsapp"></i>
                <span>Whatsapp</span>
              </a>
              <a href="tel:+919436585717" className="utility-link">
                <i className="fas fa-phone-alt"></i>
                <span>Call Us</span>
              </a>
              <a href="#campus-life" className="utility-link">
                <i className="fas fa-compass"></i>
                <span>360°</span>
              </a>
            </div>
            <div className="social-icons">
              <a href="#footer" aria-label="Facebook" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#footer" aria-label="Instagram" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#footer" aria-label="YouTube" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#footer" aria-label="LinkedIn" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
