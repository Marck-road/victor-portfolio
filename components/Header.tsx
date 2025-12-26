import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Video', id: 'video' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-400 ${isScrolled ? 'blur-header py-4' : 'bg-transparent py-6'}`}>
      <nav className="max-w-[1120px] mx-4 lg:mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-black text-title tracking-tighter">
          V<span className="text-first">A</span>
        </a>

        {/* Desktop Menu */}
        <div className={`
          fixed top-0 ${isMenuOpen ? 'right-0' : '-right-full'} bg-body/95 lg:bg-transparent backdrop-blur-3xl lg:backdrop-blur-0 w-3/4 h-full lg:static lg:w-auto lg:h-auto 
          pt-[6rem] lg:pt-0 pl-12 lg:pl-0 transition-[right] duration-500 z-[100] shadow-2xl lg:shadow-none
        `}>
          <ul className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-first ${activeSection === link.id ? 'text-first' : 'text-text'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Close button - Mobile only */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-3xl text-title lg:hidden"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Toggle button - Mobile only */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-2xl text-title cursor-pointer lg:hidden p-2 glass-card rounded-xl"
        >
          <i className="ri-menu-4-line"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;