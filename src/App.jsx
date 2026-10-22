import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import AlertBar from './components/AlertBar.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import ExcellenceSection from './components/ExcellenceSection.jsx';
import WhyUsSection from './components/WhyUsSection.jsx';
import StudentLifeSection from './components/StudentLifeSection.jsx';
import ResearchSection from './components/ResearchSection.jsx';
import StudentWorkSection from './components/StudentWorkSection.jsx';
import AlumniSection from './components/AlumniSection.jsx';
import Footer from './components/Footer.jsx';
import ChatBot from './components/ChatBot.jsx';

export default function App() {
  const formRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="app-wrapper">
      <header>
        <AlertBar onRegisterClick={scrollToForm} />
        <Navbar onApplyClick={scrollToForm} />
        <HeroSection formRef={formRef} />
      </header>

      <main>
        <ExcellenceSection />
        <WhyUsSection />
        <StudentLifeSection />
        <ResearchSection />
        <StudentWorkSection />
        <AlumniSection />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
