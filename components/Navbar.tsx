
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  onTalkToUsClick: () => void;
  currentPage: 'home' | 'services';
  onNavigateHome: () => void;
  onNavigateServices: () => void;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
];

const Navbar: React.FC<NavbarProps> = ({ 
  onTalkToUsClick, 
  currentPage, 
  onNavigateHome, 
  onNavigateServices 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler for navigation clicks
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    setIsOpen(false);

    if (item.label === 'Services') {
      onNavigateServices();
      return;
    }

    if (item.label === 'Home') {
      onNavigateHome();
      // If we are already home, scroll to top
      if (currentPage === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // For other links (About us, Projects)
    // First, ensure we are on the home page
    if (currentPage !== 'home') {
      onNavigateHome();
      // Wait for render then scroll
      setTimeout(() => {
        scrollToElement(item.href);
      }, 100);
    } else {
      scrollToElement(item.href);
    }
  };

  const scrollToElement = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || currentPage === 'services' ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group"
        >
          <img 
            src="https://i.postimg.cc/J0MDkbWj/labflow-transparan.png" 
            alt="LabFlow Icon"
            className="h-10 w-auto object-contain animate-glow"
          />
          <img 
            src="https://i.postimg.cc/NfMTkqn2/labflow-tulisan.png" 
            alt="LabFlow"
            className="h-8 w-auto object-contain mt-1"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`font-medium transition-colors cursor-pointer ${
                currentPage === 'services' && item.label === 'Services' 
                  ? 'text-labblue-600 font-bold' 
                  : 'text-slate-600 hover:text-labblue-600'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={onTalkToUsClick}
            className="px-6 py-2.5 bg-labblue-600 text-white font-semibold rounded-full hover:bg-labblue-700 transition-all shadow-lg shadow-labblue-200"
          >
            Talk to Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium text-lg cursor-pointer ${
                currentPage === 'services' && item.label === 'Services' 
                  ? 'text-labblue-600' 
                  : 'text-slate-700 hover:text-labblue-600'
              }`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </a>
          ))}
          <button
            className="w-full text-center px-6 py-3 bg-labblue-600 text-white font-semibold rounded-lg hover:bg-labblue-700 transition-colors"
            onClick={() => {
              setIsOpen(false);
              onTalkToUsClick();
            }}
          >
            Talk to Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
