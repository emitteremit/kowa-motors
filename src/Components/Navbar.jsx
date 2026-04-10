import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-display tracking-tight text-white hover:opacity-80 transition-opacity">
          KOWA<span className="text-amber-400">MOTORS</span>
        </Link>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <Link to="/" className="text-white/80 hover:text-amber-400 transition-colors">Home</Link>
          <Link to="/contact" className="text-white/80 hover:text-amber-400 transition-colors">Contacts</Link>
          <Link to="/gallery" className="text-white/80 hover:text-amber-400 transition-colors">Gallery</Link>
          <Link to="/about" className="text-white/80 hover:text-amber-400 transition-colors">AboutUs</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            to="/admin"
            className="hidden sm:block px-5 py-2 rounded-full border border-amber-400/40 text-amber-400 text-sm font-semibold hover:bg-amber-400 hover:text-black transition-all duration-300"
          >
            Admin
          </Link>
          
          {/* Hamburger Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/80 hover:text-amber-400 transition-colors md:hidden p-2"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop Blur Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-xl z-30 transition-opacity duration-500 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full glass transition-all duration-500 overflow-hidden md:hidden z-40 ${isOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}>
        <div className="flex flex-col p-8 space-y-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white/90 hover:text-amber-400 transition-colors">Home</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white/90 hover:text-amber-400 transition-colors">Contacts</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white/90 hover:text-amber-400 transition-colors">Gallery</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white/90 hover:text-amber-400 transition-colors">AboutUs</Link>
          <div className="pt-4 mt-2 border-t border-white/10">
            <Link to="/admin" onClick={() => setIsOpen(false)} className="inline-block px-8 py-3 rounded-full bg-amber-500 text-black font-bold text-center w-full shadow-xl shadow-amber-500/30 active:scale-95 transition-transform">Admin Panel</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
