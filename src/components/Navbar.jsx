import React, { useState, useEffect } from 'react';

const secondaryLinks = [
  { label: 'JOBS', href: '#footer' },
  { label: 'HAPPENINGS', href: '#student-work' },
  { label: 'HR.SEC', href: '#why-us' },
  { label: 'STUDY ABROAD', href: '#research' },
  { label: 'INTERNATIONAL ADMISSION', href: '#apply-form' },
  { label: 'JESUITS', href: '#excellence' },
  { label: 'BUILDINGS', href: '#campus-life' },
  { label: 'CONTACT', href: '#footer' },
];

const primaryLinks = [
  {
    label: 'ABOUT',
    href: '#excellence',
    hasDropdown: true,
    subItems: ['Vision & Mission', 'Leadership', 'Accreditations', 'Rankings'],
  },
  {
    label: 'ADMISSION',
    href: '#apply-form',
    hasDropdown: true,
    subItems: ['Undergraduate', 'Postgraduate', 'Ph.D Programs', 'Scholarships'],
  },
  {
    label: 'COLLEGE',
    href: '#why-us',
    hasDropdown: true,
    subItems: ['Engineering', 'Business & Management', 'Arts & Sciences', 'Faculty'],
  },
  { label: 'INFRASTRUCTURE', href: '#student-work', hasDropdown: false },
  { label: 'CAMPUS LIFE', href: '#campus-life', hasDropdown: false },
  { label: 'RESEARCH', href: '#research', hasDropdown: false },
];

export default function Navbar({ onApplyClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('ABOUT');
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label) => {
    setActiveNav(label);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const target = document.getElementById('research');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className={`main-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-nav">
            <a href="#" className="logo-section" onClick={() => setActiveNav('ABOUT')}>
              <div className="logo-placeholder">
                <img
                  src="./Assets/cropped-Round-Seal-Color-150x150 1.png"
                  alt="St. Xavier's Umoid University Seal"
                />
              </div>
              <div className="university-name">
                <h1>ST. XAVIER'S UMOID</h1>
                <p>South West Khasi Hills District, Meghalaya, India</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="primary-secondery-nav desktop-only">
              <div className="secondary-nav">
                <div className="secondary-nav-content">
                  {secondaryLinks.map((item) => (
                    <a key={item.label} href={item.href} className="sec-nav-link">
                      {item.label}
                    </a>
                  ))}
                  <div className="umoid-box">UMOID</div>
                </div>
              </div>

              <nav className="primary-nav" aria-label="Primary Navigation">
                {primaryLinks.map((item) => (
                  <div key={item.label} className="nav-item-wrapper">
                    <a
                      href={item.href}
                      className={`primary-nav-link ${activeNav === item.label ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.label)}
                    >
                      {item.label}
                      {item.hasDropdown && <i className="fas fa-chevron-down"></i>}
                    </a>
                    {item.hasDropdown && (
                      <div className="dropdown-menu">
                        {item.subItems.map((sub) => (
                          <a
                            key={sub}
                            href={item.href}
                            className="dropdown-item"
                            onClick={() => handleNavClick(item.label)}
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  className="search-btn"
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Toggle Search"
                >
                  <i className={`fas ${searchOpen ? 'fa-times' : 'fa-search'}`}></i>
                  <span>Search</span>
                </button>

                <button
                  type="button"
                  className="apply-now-btn btn-shine"
                  onClick={onApplyClick}
                >
                  APPLY NOW
                </button>
              </nav>
            </div>

            {/* Mobile Controls */}
            <div className="mobile-header-actions">
              <button
                type="button"
                className="mobile-search-toggle"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <i className={`fas ${searchOpen ? 'fa-times' : 'fa-search'}`}></i>
              </button>
              <button
                type="button"
                className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Search Bar */}
      {searchOpen && (
        <div className="search-overlay">
          <div className="container">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search programs, admissions, research, campus life..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="search-submit-btn">
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-primary-links">
            {primaryLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`mobile-nav-link ${activeNav === item.label ? 'active' : ''}`}
                onClick={() => handleNavClick(item.label)}
              >
                <span>{item.label}</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            ))}
          </div>

          <div className="mobile-secondary-links">
            <div className="mobile-sec-title">Quick Links</div>
            <div className="mobile-sec-grid">
              {secondaryLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mobile-cta-wrapper">
            <button
              type="button"
              className="apply-now-btn mobile-apply-btn btn-shine"
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
            >
              APPLY NOW FOR 2026 INTAKE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
