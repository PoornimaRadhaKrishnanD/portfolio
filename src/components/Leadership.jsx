import React from 'react';
import { Icon } from './Icons';
import { leadershipData } from '../data/portfolioData';

export const Leadership = () => {
  return (
    <section id="leadership" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Icon name="users" size={14} />
            <span>Campus Responsibility</span>
          </div>
          <h2 className="section-title">Leadership & Activities</h2>
          <p className="section-description">
            Active roles in campus placement coordination, departmental representation, student club treasury, and community service.
          </p>
        </div>

        {/* Leadership Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem'
        }}>
          {leadershipData.map((role, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818cf8'
                  }}>
                    <Icon name="users" size={24} />
                  </div>

                  <span className="badge badge-web">
                    {role.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                  {role.role}
                </h3>

                <div style={{ fontSize: '0.92rem', color: '#38bdf8', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {role.organization}
                </div>

                <div style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem'
                }}>
                  {role.period}
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {role.highlights.map((h, hIdx) => (
                    <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#818cf8', marginTop: '2px' }}>▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
