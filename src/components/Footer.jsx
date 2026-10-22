import React from 'react';

const admissionsLinks = [
  'Admissions 2025-26',
  'International Admission 2025-26',
  'Distance Education Admissions',
  'Online Education Admissions',
  'Scholarship & Aid',
  'Fee Deposits',
  'FAQs',
  "ST.XAVIER's Blog",
];

const academicsLinks = [
  'Joint Placement Drive',
  'Alumni',
  'Entrepreneurship',
  'Top Engineering College in India',
  'Top MBA Colleges',
  'Entitlement Application (OL)',
  'Entitlement Application (ODL)',
  '(Under Category-1 HEI)',
];

const othersLinks = [
  'NISP',
  'NIRF',
  'UGC Public Self Disclosure Act',
  'UGC e-Samadhan Portal',
  'Supplier Registration',
  'Careers @ SJC',
  "Parent's Login",
];

const policyLinks = [
  'Anti Ragging',
  'ICC',
  'Privacy Policy',
  'Disclaimer',
  'Terms and Conditions',
  'Student Grievance Redressal',
  'Caste Based Discrimination',
];

export default function Footer() {
  return (
    <div id="footer">
      <footer className="university-footer">
        <div className="footer-content-grid">
          {/* Identity and Location Section */}
          <div className="footer-column identity-section" data-aos="fade-right">
            <div className="university-logo">
              <div className="logo-symbol">
                <img
                  src="./Assets/cropped-Round-Seal-Color-150x150 1.png"
                  alt="St. Xavier's Umoid Seal"
                />
              </div>
              <div className="university-identity">
                <h2>ST. XAVIER&apos;S UMOID</h2>
                <p>Learn More Learn Life District, Meghalaya, India</p>
              </div>
            </div>

            <div className="location-details">
              <h4>—— Locate Us</h4>
              <div className="address-block">
                <h3>ST. XAVIER&apos;S UMOID</h3>
                <p>
                  North of Umjarain (on the Umjarain-Diwah Road)
                  <br />
                  South West Khasi Hills Dt.
                  <br />
                  Meghalaya 793114 INDIA
                </p>
              </div>

              <div className="contact-details">
                <p>
                  <i className="fas fa-phone-alt"></i> Tel: +91 (943) 658-5717
                </p>
                <p>
                  <i className="fas fa-envelope"></i> info@stxaviersumoid.edu.in
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=South+West+Khasi+Hills+Meghalaya"
                target="_blank"
                rel="noreferrer"
                className="navigation-button"
              >
                <i className="fas fa-arrow-right"></i>
                <span>Get Direction</span>
              </a>
            </div>
          </div>

          {/* Admissions Section */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
            <h3>ADMISSIONS</h3>
            <ul className="footer-menu">
              {admissionsLinks.map((item) => (
                <li key={item}>
                  <a href="#apply-form">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Section */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
            <h3>ACADEMICS</h3>
            <ul className="footer-menu">
              {academicsLinks.map((item) => (
                <li key={item}>
                  <a href="#why-us">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Section */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
            <h3>OTHERS</h3>
            <ul className="footer-menu">
              {othersLinks.map((item) => (
                <li key={item}>
                  <a href="#research">{item}</a>
                </li>
              ))}
            </ul>

            <h3 className="follow-us-heading">Follow Us</h3>
            <div className="social-media-icons">
              <a href="#footer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#footer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#footer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#footer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-base">
        <div className="base-content">
          <div className="policy-links">
            {policyLinks.map((policy, idx) => (
              <React.Fragment key={policy}>
                <a href="#footer">{policy}</a>
                {idx < policyLinks.length - 1 && (
                  <span className="policy-sep">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="copyright-text">
            Copyrights © 2025 All Rights Reserved by St. Xavier&apos;s Umoid
          </p>
        </div>
      </div>
    </div>
  );
}
