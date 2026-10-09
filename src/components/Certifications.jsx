import React from 'react';
import { Icon } from './Icons';
import { certificationsData } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="section" style={{ background: 'rgba(9, 13, 26, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Icon name="shieldcheck" size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-description">
            Industry and institutional certifications validating expertise in full-stack database architectures, safe AI alignment, and human-computer interaction.
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: cert.type === 'Industry Certification' 
                  ? '1px solid rgba(16, 185, 129, 0.4)' 
                  : '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: cert.type === 'Industry Certification'
                      ? 'rgba(16, 185, 129, 0.15)'
                      : 'rgba(99, 102, 241, 0.15)',
                    border: cert.type === 'Industry Certification'
                      ? '1px solid rgba(16, 185, 129, 0.3)'
                      : '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: cert.type === 'Industry Certification' ? '#34d399' : '#818cf8'
                  }}>
                    <Icon name="shieldcheck" size={24} />
                  </div>

                  <span className={`badge ${cert.type === 'Industry Certification' ? 'badge-success' : 'badge-ai'}`}>
                    {cert.type}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem', lineHeight: 1.35 }}>
                  {cert.title}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-accent)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '1rem'
                }}>
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.year}</span>
                </div>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                {cert.skills.map((s, sIdx) => (
                  <span key={sIdx} className="tech-tag" style={{ fontSize: '0.74rem' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
