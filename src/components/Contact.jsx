import React, { useState } from 'react';
import { Icon } from './Icons';
import { personalData } from '../data/portfolioData';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="section" style={{ background: 'rgba(9, 13, 26, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Icon name="mail" size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description">
            I am currently open to full-time Software Development Engineer (SDE), Machine Learning, and Data Analytics opportunities (Batch of 2027). Feel free to reach out directly!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1050px',
          margin: '0 auto'
        }}>
          {/* Direct Communication Channels Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.6rem' }}>
                Direct Contact
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                You can reach me directly via institutional email or phone. Responses are typically returned within 24 hours.
              </p>

              {/* Email item */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818cf8',
                    flexShrink: 0
                  }}>
                    <Icon name="mail" size={20} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalData.email}?subject=Opportunity%20Inquiry%20-%20Poornima%20R%20K`}
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: '#f8fafc',
                        textDecoration: 'none',
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                      title="Click to open default mail app"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0, marginLeft: '0.5rem' }}>
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-secondary btn-sm"
                    title="Copy email to clipboard"
                    style={{ padding: '0.45rem 0.65rem' }}
                  >
                    <Icon name={copiedEmail ? 'check' : 'copy'} size={15} />
                    <span style={{ fontSize: '0.78rem' }}>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Phone item */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                    flexShrink: 0
                  }}>
                    <Icon name="phone" size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      Contact Number
                    </div>
                    <a
                      href={`tel:${personalData.rawPhone}`}
                      style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f8fafc', textDecoration: 'none' }}
                      title="Click to call"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
                  <button
                    onClick={handleCopyPhone}
                    className="btn btn-secondary btn-sm"
                    title="Copy phone to clipboard"
                    style={{ padding: '0.45rem 0.65rem' }}
                  >
                    <Icon name={copiedPhone ? 'check' : 'copy'} size={15} />
                    <span style={{ fontSize: '0.78rem' }}>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Location */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22d3ee',
                  flexShrink: 0
                }}>
                  <Icon name="mappin" size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Campus Location
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#f8fafc' }}>
                    {personalData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Resume button link */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a
                href={personalData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
                title="Download or preview resume.pdf"
              >
                <Icon name="download" size={17} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Social Presence & Recruiter Quick Draft Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.6rem' }}>
                Online Profiles & Networks
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Explore my code repositories, technical paper presentations, and career updates across developer platforms.
              </p>

              {/* Social Link Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <a
                  href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(10, 102, 194, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#60a5fa'
                    }}>
                      <Icon name="linkedin" size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>LinkedIn</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        linkedin.com/in/poornima-r-k
                      </div>
                    </div>
                  </div>
                  <Icon name="arrowupright" size={16} style={{ color: 'var(--text-muted)' }} />
                </a>

                <a
                  href={personalData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}>
                      <Icon name="github" size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>GitHub</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        github.com/PoornimaRadhaKrishnanD
                      </div>
                    </div>
                  </div>
                  <Icon name="arrowupright" size={16} style={{ color: 'var(--text-muted)' }} />
                </a>

                <a
                  href={personalData.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(245, 158, 11, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fbbf24'
                    }}>
                      <Icon name="code" size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>Coding Profile</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        Handle: Poornima_R_K
                      </div>
                    </div>
                  </div>
                  <Icon name="arrowupright" size={16} style={{ color: 'var(--text-muted)' }} />
                </a>
              </div>
            </div>

            {/* Recruiter Quick Mail CTA Box */}
            <div style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.35rem' }}>
                Hiring for 2027 Placements or Internships?
              </div>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.9rem' }}>
                Click below to launch an email draft with your mail client:
              </div>
              <a
                href={`mailto:${personalData.email}?subject=Opportunity%20Discussion%20for%20Poornima%20R%20K&body=Hi%20Poornima,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity%20with%20our%20team.`}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', background: '#ffffff', color: '#0f172a', fontWeight: 700 }}
              >
                <Icon name="mail" size={15} style={{ color: '#0f172a' }} />
                <span>Launch Mail Draft</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
