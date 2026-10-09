import React from 'react';
import { Icon } from './Icons';
import { achievementsData } from '../data/portfolioData';

export const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Icon name="award" size={14} />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="section-title">Achievements & Awards</h2>
          <p className="section-description">
            Recognitions for academic standing, competitive research paper presentations, and hackathon participation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem'
        }}>
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: idx === 0 ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: idx === 0 
                      ? 'rgba(245, 158, 11, 0.15)' 
                      : 'rgba(99, 102, 241, 0.15)',
                    border: idx === 0 
                      ? '1px solid rgba(245, 158, 11, 0.3)' 
                      : '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: idx === 0 ? '#fbbf24' : '#818cf8'
                  }}>
                    <Icon name="award" size={24} />
                  </div>

                  <span className="badge" style={{
                    background: idx === 0 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                    color: idx === 0 ? '#fbbf24' : '#a5b4fc',
                    border: idx === 0 ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(99, 102, 241, 0.3)'
                  }}>
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                  {item.title}
                </h3>

                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-accent)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '1rem'
                }}>
                  {item.issuer} • {item.period}
                </div>

                <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
