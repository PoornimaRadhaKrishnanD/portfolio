import React from 'react';
import { Icon } from './Icons';
import { personalData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'rgba(5, 7, 15, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '3.5rem',
      paddingBottom: '2.5rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '800',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-mono)'
              }}>
                PRK
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                Poornima R K
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '320px', marginBottom: '1.25rem' }}>
              Final-year B.Tech AI & ML student at Kongu Engineering College. Focused on building practical technology solutions and scalable intelligent applications.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>
              <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
              <span>Graduation Batch 2027 • CGPA 8.70</span>
            </div>
          </div>

          {/* Quick Section Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.86rem' }}>
              <a href="#home" style={{ color: 'var(--text-secondary)' }}>Home</a>
              <a href="#about" style={{ color: 'var(--text-secondary)' }}>About</a>
              <a href="#skills" style={{ color: 'var(--text-secondary)' }}>Skills</a>
              <a href="#projects" style={{ color: 'var(--text-secondary)' }}>Projects</a>
              <a href="#education" style={{ color: 'var(--text-secondary)' }}>Education</a>
              <a href="#achievements" style={{ color: 'var(--text-secondary)' }}>Achievements</a>
              <a href="#certifications" style={{ color: 'var(--text-secondary)' }}>Certifications</a>
              <a href="#leadership" style={{ color: 'var(--text-secondary)' }}>Leadership</a>
            </div>
          </div>

          {/* Connect & Resume */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Connect & Credentials
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.86rem' }}>
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Icon name="linkedin" size={15} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Icon name="github" size={15} />
                <span>GitHub Repositories</span>
              </a>

              <a
                href={personalData.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Icon name="code" size={15} />
                <span>Coding Platform (Poornima_R_K)</span>
              </a>

              <a
                href={personalData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, marginTop: '0.25rem' }}
                title="Download or preview resume.pdf"
              >
                <Icon name="filetext" size={15} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            © {currentYear} Poornima R K. All rights reserved. Built with React & Vite.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <Icon name="arrowup" size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
