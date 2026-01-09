import React, { useEffect, useState } from 'react';
import About from './components/About.tsx';
import Certificates from './components/Certificates.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import ScrollUp from './components/ScrollUp.tsx';
import Services from './components/Services.tsx';
import Skills from './components/Skills.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current: any) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, []);

  return (
    <div className="bg-body">
      <Header activeSection={activeSection} />
      <main>
        <Home />
        <About />
        {/* <VideoShowcase /> */}
        <Skills />
        <Services />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default App;