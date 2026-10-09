import React from 'react';
import { Icon } from './Icons';
import { personalData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="section" style={{ background: 'rgba(9, 13, 26, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Icon name="sparkles" size={14} />
            <span>Background & Vision</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Passionate about bridging intelligent machine learning systems with scalable, responsive full-stack software architectures.
          </p>
        </div>

        {/* Top Split: Career Objective Card & Academic Summary */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Career Objective Glass Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              position: 'relative',
              overflow: 'hidden',
              borderLeft: '4px solid #6366f1'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(99, 102, 241, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a5b4fc'
              }}>
                <Icon name="briefcase" size={20} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#ffffff' }}>Career Objective</h3>
            </div>

            <blockquote style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#e2e8f0',
              fontStyle: 'normal'
            }}>
              "{personalData.careerObjective}"
            </blockquote>

            <div style={{
              marginTop: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon name="graduationcap" size={16} className="text-accent" />
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Kongu Engineering College
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon name="award" size={16} style={{ color: '#fbbf24' }} />
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  8.70 CGPA (till 6th sem)
                </span>
              </div>
            </div>
          </div>

          {/* Academic Snapshot Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22d3ee'
                }}>
                  <Icon name="brain" size={20} />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#ffffff' }}>Engineering Focus</h3>
              </div>

              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Currently in my final year of B.Tech in Artificial Intelligence and Machine Learning (Graduation 2027). I specialize in synthesizing robust software engineering practices with modern data and ML paradigms.
              </p>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                From developing evidence-grounded medical RAG pipelines to architecting full-stack React applications and analyzing 2,20,000+ student records in Power BI, I focus on delivering reliable, production-ready solutions.
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <span className="badge badge-ai">GenAI & RAG</span>
              <span className="badge badge-web">React & Node.js</span>
              <span className="badge badge-analytics">Power BI & DAX</span>
              <span className="badge badge-success">Academic Rank</span>
            </div>
          </div>
        </div>

        {/* 4 Core Areas of Interest Grid */}
        <div>
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Areas of Interest
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Core domains where I apply technical problem-solving and software development
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {personalData.areasOfInterest.map((area, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#818cf8',
                  marginBottom: '1.25rem'
                }}>
                  <Icon name={area.icon} size={22} />
                </div>

                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                  {area.title}
                </h4>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
