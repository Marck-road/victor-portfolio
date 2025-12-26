
import React, { useState, useEffect } from 'react';

const ScrollUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a 
      href="#" 
      onClick={scrollToTop}
      className={`fixed right-4 lg:right-12 p-2 bg-body rounded-md text-first text-xl shadow-lg z-[10] transition-all duration-400 hover:-translate-y-1 ${isVisible ? 'bottom-12 opacity-100' : '-bottom-full opacity-0'}`}
    >
      <i className="ri-arrow-up-line"></i>
    </a>
  );
};

export default ScrollUp;
