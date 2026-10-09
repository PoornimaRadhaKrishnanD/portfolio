import React, { useState } from 'react';
import { Icon } from './Icons';

export const ProjectCard = ({ project, onOpenDetails }) => {
  const [showConfigNotice, setShowConfigNotice] = useState(false);

  const getBadgeClass = (type) => {
    switch (type) {
      case 'featured': return 'badge-featured';
      case 'ai': return 'badge-ai';
      case 'web': return 'badge-web';
      case 'analytics': return 'badge-analytics';
      default: return 'badge-web';
    }
  };

  const handleLinkClick = (e, url, isPlaceholder, label) => {
    if (isPlaceholder || !url) {
      e.preventDefault();
      setShowConfigNotice(label);
      setTimeout(() => setShowConfigNotice(false), 3000);
    }
  };

  return (
    <article
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2rem',
        position: 'relative',
        border: project.featured ? '1px solid rgba(99, 102, 241, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
        background: project.featured 
          ? 'linear-gradient(180deg, rgba(20, 27, 51, 0.85) 0%, rgba(11, 17, 33, 0.8) 100%)' 
          : 'var(--bg-card)'
      }}
    >
      {/* Card Header: Category & Special Badge */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <span className={`badge ${getBadgeClass(project.badgeType)}`}>
            {project.badge}
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '1.45rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '0.4rem',
          letterSpacing: '-0.02em'
        }}>
          {project.title}
        </h3>

        {/* Tagline */}
        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text-accent)',
          fontFamily: 'var(--font-mono)',
          marginBottom: '1rem'
        }}>
          {project.tagline}
        </p>

        {/* Summary Description */}
        <p style={{
          fontSize: '0.94rem',
          lineHeight: 1.65,
          color: 'var(--text-secondary)',
          marginBottom: '1.25rem'
        }}>
          {project.summary}
        </p>

        {/* Strict Disclaimer for TrustMedAI */}
        {project.disclaimer && (
          <div style={{
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            marginBottom: '1.25rem',
            fontSize: '0.8rem',
            color: '#fef08a',
            lineHeight: 1.5,
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem'
          }}>
            <Icon name="shieldcheck" size={16} style={{ color: '#fbbf24', marginTop: '2px' }} />
            <span>
              <strong>Academic Note:</strong> {project.disclaimer}
            </span>
          </div>
        )}

        {/* Key Highlights List */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
            Key Architecture & Features:
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {project.highlights.map((item, hIdx) => (
              <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                <span style={{ color: '#818cf8', marginTop: '3px' }}>▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer: Tech Tags & Action Buttons */}
      <div>
        {/* Tech Stack Chips */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          marginBottom: '1.5rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {project.tech.map((t, tIdx) => (
            <span key={tIdx} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleLinkClick(e, project.githubUrl, project.isGithubPlaceholder, 'GitHub Repository')}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1 }}
            title={project.isGithubPlaceholder ? "Configured link in src/data/portfolioData.js" : "View source code on GitHub"}
          >
            <Icon name="github" size={15} />
            <span>GitHub</span>
            {project.isGithubPlaceholder && (
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>[Config]</span>
            )}
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ flex: 1 }}
            >
              <span>Live Demo</span>
              <Icon name="externallink" size={14} />
            </a>
          ) : (
            <button
              onClick={() => onOpenDetails(project)}
              className="btn btn-outline btn-sm"
              style={{ flex: 1 }}
            >
              <span>Inspect Details</span>
              <Icon name="arrowupright" size={14} />
            </button>
          )}
        </div>

        {/* Placeholder Config Toast */}
        {showConfigNotice && (
          <div style={{
            marginTop: '0.75rem',
            padding: '0.5rem 0.75rem',
            background: 'rgba(99, 102, 241, 0.2)',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.75rem',
            color: '#c7d2fe',
            textAlign: 'center'
          }}>
            Link for <strong>{showConfigNotice}</strong> can be set in <code>src/data/portfolioData.js</code>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
