import React from 'react';
import { Icon } from './Icons';
import { educationData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="section" style={{ background: 'rgba(9, 13, 26, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Icon name="graduationcap" size={14} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Strong academic foundation in computer science and artificial intelligence with consistent high academic ranking.
          </p>
        </div>

        {/* Education Timeline */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical timeline spine */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            background: 'linear-gradient(180deg, #6366f1 0%, #06b6d4 100%)',
            opacity: 0.35,
            display: 'block'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {educationData.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  position: 'relative'
                }}
              >
                {/* Node marker */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.95)',
                  border: idx === 0 ? '2px solid #6366f1' : '2px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: idx === 0 ? '0 0 20px rgba(99, 102, 241, 0.4)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: idx === 0 ? '#818cf8' : '#94a3b8',
                  flexShrink: 0,
                  zIndex: 2
                }}>
                  <Icon name="graduationcap" size={24} />
                </div>

                {/* Card Content */}
                <div
                  className="glass-card"
                  style={{
                    flex: 1,
                    padding: '2rem',
                    border: idx === 0 ? '1px solid rgba(99, 102, 241, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '0.75rem'
                  }}>
                    <div>
                      <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                        {item.degree}
                      </h3>
                      <div style={{ fontSize: '1rem', color: '#38bdf8', fontWeight: 600 }}>
                        {item.institution}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {item.location}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.3rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(99, 102, 241, 0.15)',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        fontSize: '0.8rem',
                        color: '#a5b4fc',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        marginBottom: '0.4rem'
                      }}>
                        <Icon name="calendar" size={13} />
                        <span>{item.period}</span>
                      </div>
                      <div>
                        <span style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: '#34d399',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          {item.score}
                        </span>
                        {item.scoreDetail && (
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {item.scoreDetail}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {item.highlights && item.highlights.length > 0 && (
                    <div style={{
                      marginTop: '1.25rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                            <span style={{ color: '#6366f1', marginTop: '2px' }}>▹</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
