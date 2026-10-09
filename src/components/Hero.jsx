import React, { useState } from 'react';
import { Icon } from './Icons';
import { personalData } from '../data/portfolioData';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="section" style={{ paddingTop: '7.5rem', paddingBottom: '4.5rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Hero Introduction */}
          <div>
            {/* Status indicator */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div className="status-pill">
                <span className="pulse-dot"></span>
                <span>{personalData.availability}</span>
              </div>
            </div>

            {/* Name heading */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1rem',
              letterSpacing: '-0.03em'
            }}>
              Hi, I'm{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ffffff 20%, #a5b4fc 60%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                {personalData.name}
              </span>
            </h1>

            {/* Headline */}
            <h2 style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              fontWeight: 600,
              color: '#c7d2fe',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-mono)'
            }}>
              {personalData.headline}
            </h2>

            {/* Bio paragraph */}
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '580px'
            }}>
              {personalData.bio}
            </p>

            {/* Primary Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              marginBottom: '2.25rem'
            }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore My Projects</span>
                <Icon name="arrowright" size={17} />
              </a>

              <a
                href={personalData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                title="Download or preview resume.pdf"
              >
                <Icon name="download" size={17} />
                <span>Download Resume</span>
              </a>

              <a href="#contact" className="btn btn-outline">
                <Icon name="mail" size={17} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Email Copy */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                CONNECT:
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <a
                  href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: poornima-r-k"
                  style={{ padding: '0.45rem 0.75rem' }}
                >
                  <Icon name="linkedin" size={16} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="GitHub Profile"
                  title="GitHub: PoornimaRadhaKrishnanD"
                  style={{ padding: '0.45rem 0.75rem' }}
                >
                  <Icon name="github" size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalData.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="Coding Profile"
                  title="Coding Handle: Poornima_R_K"
                  style={{ padding: '0.45rem 0.75rem' }}
                >
                  <Icon name="code" size={16} />
                  <span>Coding Profile</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  title="Copy email address"
                  style={{ padding: '0.45rem 0.75rem' }}
                >
                  <Icon name={copied ? 'check' : 'copy'} size={15} />
                  <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dev Terminal / Code Matrix Graphic */}
          <div style={{ position: 'relative' }}>
            {/* Background ambient glow effect */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '110%',
              height: '110%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
              zIndex: 0
            }} />

            {/* Terminal Window Card */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.15)'
              }}
            >
              {/* Window Header */}
              <div style={{
                background: 'rgba(10, 15, 30, 0.9)',
                padding: '0.8rem 1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }}></span>
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    poornima-rk ~/portfolio
                  </span>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  <button
                    onClick={() => setActiveTab('profile')}
                    style={{
                      padding: '0.25rem 0.6rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: '4px',
                      background: activeTab === 'profile' ? 'rgba(99, 102, 241, 0.25)' : 'transparent',
                      color: activeTab === 'profile' ? '#ffffff' : 'var(--text-muted)',
                      border: activeTab === 'profile' ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid transparent'
                    }}
                  >
                    profile.json
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    style={{
                      padding: '0.25rem 0.6rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: '4px',
                      background: activeTab === 'stack' ? 'rgba(99, 102, 241, 0.25)' : 'transparent',
                      color: activeTab === 'stack' ? '#ffffff' : 'var(--text-muted)',
                      border: activeTab === 'stack' ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid transparent'
                    }}
                  >
                    stack.ai
                  </button>
                  <button
                    onClick={() => setActiveTab('stats')}
                    style={{
                      padding: '0.25rem 0.6rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: '4px',
                      background: activeTab === 'stats' ? 'rgba(99, 102, 241, 0.25)' : 'transparent',
                      color: activeTab === 'stats' ? '#ffffff' : 'var(--text-muted)',
                      border: activeTab === 'stats' ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid transparent'
                    }}
                  >
                    metrics.log
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div style={{
                padding: '1.25rem 1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                minHeight: '280px',
                background: 'rgba(6, 10, 22, 0.85)'
              }}>
                {activeTab === 'profile' && (
                  <div>
                    <span style={{ color: '#64748b' }}>// Candidate Developer Profile</span>
                    <br />
                    <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#67e8f9' }}>candidate</span> = &#123;
                    <div style={{ paddingLeft: '1.25rem' }}>
                      <span style={{ color: '#93c5fd' }}>name</span>: <span style={{ color: '#86efac' }}>"{personalData.name}"</span>,
                      <br />
                      <span style={{ color: '#93c5fd' }}>degree</span>: <span style={{ color: '#86efac' }}>"B.Tech in Artificial Intelligence & Machine Learning"</span>,
                      <br />
                      <span style={{ color: '#93c5fd' }}>institution</span>: <span style={{ color: '#86efac' }}>"{personalData.college}"</span>,
                      <br />
                      <span style={{ color: '#93c5fd' }}>cgpa</span>: <span style={{ color: '#f59e0b' }}>8.70</span> <span style={{ color: '#64748b' }}>/* till 6th sem */</span>,
                      <br />
                      <span style={{ color: '#93c5fd' }}>graduation</span>: <span style={{ color: '#f59e0b' }}>2027</span>,
                      <br />
                      <span style={{ color: '#93c5fd' }}>currentProject</span>: <span style={{ color: '#86efac' }}>"TrustMedAI (Evidence-Grounded RAG QA)"</span>,
                      <br />
                      <span style={{ color: '#93c5fd' }}>focusAreas</span>: [
                      <br />
                      &nbsp;&nbsp;<span style={{ color: '#fde047' }}>"Frontend"</span>, <span style={{ color: '#fde047' }}>"Backend"</span>, <span style={{ color: '#fde047' }}>"Machine Learning"</span>, <span style={{ color: '#fde047' }}>"Data Analysis"</span>
                      <br />
                      ]
                    </div>
                    &#125;;
                    <br />
                    <span style={{ color: '#6366f1' }}>export default</span> candidate;
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div>
                    <span style={{ color: '#64748b' }}># Verified Skills from Resume</span>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.4rem' }}>
                      <div>
                        <span style={{ color: '#38bdf8' }}>$ frontend:</span>{' '}
                        <span style={{ color: '#e2e8f0' }}>React.js • JavaScript • HTML5 • CSS3 • Bootstrap</span>
                      </div>
                      <div>
                        <span style={{ color: '#818cf8' }}>$ backend:</span>{' '}
                        <span style={{ color: '#e2e8f0' }}>Node.js • Express • REST APIs</span>
                      </div>
                      <div>
                        <span style={{ color: '#34d399' }}>$ database:</span>{' '}
                        <span style={{ color: '#e2e8f0' }}>MongoDB (Certified Associate) • MySQL</span>
                      </div>
                      <div>
                        <span style={{ color: '#f472b6' }}>$ ai_ml:</span>{' '}
                        <span style={{ color: '#e2e8f0' }}>Python • TensorFlow • Keras • Scikit-learn • NLTK • CNN</span>
                      </div>
                      <div>
                        <span style={{ color: '#fbbf24' }}>$ generative_ai:</span>{' '}
                        <span style={{ color: '#e2e8f0' }}>LLMs • Retrieval-Augmented Generation (RAG)</span>
                      </div>
                      <div>
                        <span style={{ color: '#22d3ee' }}>$ analytics:</span>{' '}
                        <span style={{ color: '#e2e8f0' }}>Microsoft Power BI • DAX (220,000+ Records)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div>
                    <span style={{ color: '#64748b' }}>// System Diagnostic & Credentials Log</span>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.3rem' }}>
                        <span style={{ color: '#94a3b8' }}>Academic Standing:</span>
                        <span style={{ color: '#10b981', fontWeight: 600 }}>8.70 CGPA (Top Honors)</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.3rem' }}>
                        <span style={{ color: '#94a3b8' }}>Excellence Awards:</span>
                        <span style={{ color: '#f59e0b', fontWeight: 600 }}>2 Consecutive Years</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.3rem' }}>
                        <span style={{ color: '#94a3b8' }}>Power BI Dataset Scope:</span>
                        <span style={{ color: '#38bdf8', fontWeight: 600 }}>2,20,000+ Students</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.3rem' }}>
                        <span style={{ color: '#94a3b8' }}>Leadership Tenures:</span>
                        <span style={{ color: '#a78bfa', fontWeight: 600 }}>Placement Coordinator & CR</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ color: '#94a3b8' }}>Status:</span>
                        <span style={{ color: '#4ade80' }}>Ready for Deployment</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick Bar */}
              <div style={{
                background: 'rgba(10, 15, 30, 0.7)',
                padding: '0.65rem 1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                color: 'var(--text-muted)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon name="terminal" size={14} />
                  <span>Kongu Engineering College</span>
                </div>
                <span style={{ color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>UTF-8 • React+Vite</span>
              </div>
            </div>

            {/* Floating Quick Feature Card */}
            <div
              className="glass-card animate-float"
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '-1.5rem',
                padding: '0.75rem 1.25rem',
                display: 'none',
                alignItems: 'center',
                gap: '0.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                zIndex: 2,
                background: 'rgba(15, 23, 42, 0.95)'
              }}
              id="hero-floating-card"
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(99, 102, 241, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#818cf8'
              }}>
                <Icon name="brain" size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>TrustMedAI</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Multi-Agent RAG System</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights / Metrics Strip */}
        <div style={{
          marginTop: '4.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {personalData.quickMetrics.map((metric, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                marginBottom: '0.2rem',
                background: 'linear-gradient(135deg, #ffffff 40%, #a5b4fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.15rem' }}>
                {metric.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {metric.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          #hero-floating-card {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
