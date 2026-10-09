import React, { useState } from 'react';
import { Icon } from './Icons';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.categories.map(c => c.name)];

  const filteredCategories = activeCategory === 'All' 
    ? skillsData.categories 
    : skillsData.categories.filter(c => c.name === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Icon name="code" size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive overview of programming languages, full-stack frameworks, AI/ML tools, and data analytics platforms drawn directly from my verified coursework and project experience.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  background: isSelected ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? '0 4px 15px rgba(99, 102, 241, 0.35)' : 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Category Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredCategories.map((cat, idx) => (
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                    {cat.name}
                  </h3>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {cat.skills.length} skills
                  </span>
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  {cat.description}
                </p>

                {/* Skills tags list */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.6rem',
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                        e.currentTarget.style.background = 'rgba(99, 102, 241, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      }}
                    >
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f1f5f9' }}>
                        {skill.name}
                      </span>
                      <span style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        background: 'rgba(99, 102, 241, 0.15)',
                        color: '#a5b4fc',
                        border: '1px solid rgba(99, 102, 241, 0.25)'
                      }}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Highlights Footer */}
        <div style={{
          marginTop: '3.5rem',
          padding: '1.5rem 2rem',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(15, 23, 42, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34d399'
            }}>
              <Icon name="shieldcheck" size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff' }}>
                MongoDB Certified Associate Developer
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Official certification in Node.js & MongoDB NoSQL Architecture (2025)
              </div>
            </div>
          </div>

          <a href="#projects" className="btn btn-secondary btn-sm">
            <span>See Applied Projects</span>
            <Icon name="arrowright" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
