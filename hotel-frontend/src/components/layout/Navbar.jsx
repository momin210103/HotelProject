import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { label: 'Home', href: '/', active: true },
  { label: 'Hotels', href: '/hotel/1', active: false },
  { label: 'Rooms', href: '/rooms', active: false },
  { label: 'About', href: '/about', active: false },
  { label: 'Contact', href: '/contact', active: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
      }`}
    >
      <nav className="container-page h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="transition-colors" style={{ color: '#3252DF', fontFamily: 'Poppins, sans-serif', fontSize: '26px', fontWeight: 500 }}>
          Lanka
          <span style={{ color: '#152C5B', fontFamily: 'Poppins, sans-serif', fontSize: '26px', fontWeight: 500 }}>
            Stay.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10">
          {LINKS.map(link => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`text-base font-medium transition-colors relative ${
                  isActive(link.href)
                    ? 'text-[#3252DF] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#3252DF] after:rounded-full'
                    : 'text-[#152C5B] hover:text-[#3252DF]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Button */}
        <Link
          to="/login"
          aria-label="Open login page"
          className="hidden lg:inline-flex items-center justify-center bg-[#3252DF] text-white text-sm font-medium px-6 py-2.5 rounded-[7px] shadow-[0_0_16.1px_-1px_rgba(0,0,0,0.25)] hover:bg-[#2845c7] transition-all"
        >
          Log in
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-lg">
          <div className="container-page py-6 flex flex-col gap-4">
            {LINKS.map(link => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-2 ${
                  isActive(link.href) ? 'text-[#3252DF]' : 'text-[#152C5B] hover:text-[#3252DF]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/login" className="w-full mt-4 bg-[#3252DF] text-white text-sm font-medium py-2.5 rounded-[7px] shadow-[0_0_16.1px_-1px_rgba(0,0,0,0.25)] hover:bg-[#2845c7] transition-all text-center block">
              Log in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}