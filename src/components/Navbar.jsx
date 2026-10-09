import React, { useState, useEffect } from 'react';
import { Icon } from './Icons';
import { personalData } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(7, 10, 19, 0.88)'
          : 'rgba(7, 10, 19, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={closeMenu}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.65rem',
            textDecoration: 'none'
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: '800',
            fontSize: '1rem',
            fontFamily: 'var(--font-mono)',
            boxShadow: '0 0 16px rgba(99, 102, 241, 0.4)'
          }}>
            PRK
          </div>
          <div>
            <span style={{ 
              fontWeight: 800, 
              fontSize: '1.15rem', 
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #fff 40%, #a5b4fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Poornima R K
            </span>
            <span style={{ 
              display: 'block', 
              fontSize: '0.7rem', 
              color: 'var(--text-accent)', 
              fontFamily: 'var(--font-mono)',
              lineHeight: 1
            }}>
              AIML Engineer • 2027
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.35rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  padding: '0.45rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={personalData.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex' }}
            title="Download or preview resume.pdf"
          >
            <Icon name="filetext" size={15} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
            style={{
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              color: '#ffffff',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(7, 10, 19, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem 1.5rem 1.75rem 1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.7)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.7rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: activeSection === link.href.substring(1) ? '#ffffff' : 'var(--text-secondary)',
                  background: activeSection === link.href.substring(1) ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                  border: activeSection === link.href.substring(1) ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent'
                }}
              >
                <span>{link.label}</span>
                <Icon name="chevronright" size={16} />
              </a>
            ))}

            <div style={{ paddingTop: '0.75rem', marginTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a
                href={personalData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Icon name="download" size={16} />
                Download Resume PDF
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media style override */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
