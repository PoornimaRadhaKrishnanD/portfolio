import React, { useState } from 'react';
import { Icon } from './Icons';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/portfolioData';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: 'All Projects', value: 'All', count: projectsData.length },
    { label: 'AI & Machine Learning', value: 'AI & Machine Learning', count: projectsData.filter(p => p.category === 'AI & Machine Learning').length },
    { label: 'Web Development', value: 'Web Development', count: projectsData.filter(p => p.category === 'Web Development').length },
    { label: 'Data Analytics', value: 'Data Analytics', count: projectsData.filter(p => p.category === 'Data Analytics').length },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section" style={{ background: 'rgba(7, 10, 19, 0.7)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Icon name="layers" size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">Projects & System Implementations</h2>
          <p className="section-description">
            Selected engineering projects demonstrating applied Machine Learning, GenAI multi-agent reasoning, full-stack React web applications, and enterprise data analytics.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => {
            const isSelected = activeFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  background: isSelected ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? '0 4px 15px rgba(99, 102, 241, 0.35)' : 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                <span>{cat.label}</span>
                <span style={{
                  fontSize: '0.72rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '10px',
                  background: isSelected ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                  color: isSelected ? '#ffffff' : 'var(--text-muted)'
                }}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 100,
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="glass-card"
              style={{
                maxWidth: '650px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '2.25rem',
                position: 'relative',
                background: '#0d1326',
                border: '1px solid rgba(99, 102, 241, 0.4)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  color: 'var(--text-muted)',
                  padding: '0.4rem',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Close modal"
              >
                <Icon name="x" size={20} />
              </button>

              <div style={{ marginBottom: '1.25rem' }}>
                <span className="badge badge-featured" style={{ marginBottom: '0.6rem' }}>
                  {selectedProject.category}
                </span>
                <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.3rem' }}>
                  {selectedProject.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>
                  {selectedProject.tagline}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  System Overview
                </h4>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {selectedProject.summary}
                </p>
              </div>

              {selectedProject.disclaimer && (
                <div style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem',
                  color: '#fef08a'
                }}>
                  <strong>Academic Research Exploration:</strong> {selectedProject.disclaimer}
                </div>
              )}

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  Architecture Highlights
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {selectedProject.highlights.map((h, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
                      <span style={{ color: '#818cf8', marginTop: '2px' }}>▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  Technologies & Frameworks
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <Icon name="github" size={16} />
                  <span>View Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                >
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
