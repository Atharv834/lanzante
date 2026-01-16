import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import NoiseOverlay from '../components/premium/NoiseOverlay';
import '../index.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="page-wrapper projects-technical-page">
      <NoiseOverlay />

      <div className="split-layout">
        {/* Left Column - Fixed Filters */}
        <div className="left-column">
          <div className="sticky-content">
            <div className="header-block">
              <span className="mono-label text-gold">02 // Works</span>
              <h1>Bespoke<br />Division</h1>
            </div>

            <div className="filter-system">
              <div className="filter-header mono-label">Filter Index</div>
              <div className="filter-list">
                <button
                  className={`tech-filter-btn ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  <span className="dot"></span> All Comissions
                </button>
                <button
                  className={`tech-filter-btn ${filter === 'road' ? 'active' : ''}`}
                  onClick={() => setFilter('road')}
                >
                  <span className="dot"></span> Road Legal
                </button>
                <button
                  className={`tech-filter-btn ${filter === 'commissions' ? 'active' : ''}`}
                  onClick={() => setFilter('commissions')}
                >
                  <span className="dot"></span> Special Projects
                </button>
                <button
                  className={`tech-filter-btn ${filter === 'restoration' ? 'active' : ''}`}
                  onClick={() => setFilter('restoration')}
                >
                  <span className="dot"></span> Restoration
                </button>
              </div>
            </div>

            <div className="tech-stat-block">
              <div className="stat-row">
                <span>Total Projects</span>
                <span className="text-gold">0{projectsData.length}</span>
              </div>
              <div className="stat-row">
                <span>Active</span>
                <span className="text-gold">YES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Grid */}
        <div className="right-column">
          <div className="projects-tech-grid">
            <AnimatePresence mode='wait'>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="tech-project-card"
                >
                  <Link to={`/projects/${project.id}`} className="card-link">
                    <div className="card-media">
                      <img src={project.image} alt={project.name} />
                      <div className="card-overlay">
                        <span className="view-text mono-text">View Specs_</span>
                      </div>
                    </div>
                    <div className="card-details">
                      <div className="card-header">
                        <span className="mono-label text-gold">Project 0{index + 1}</span>
                        <h3>{project.name}</h3>
                      </div>
                      <div className="specs-preview">
                        {project.specs.slice(0, 2).map((spec, i) => (
                          <div key={i} className="mini-spec">
                            <span className="label">{spec.label}</span>
                            <span className="value">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .projects-technical-page {
            background-color: var(--color-black);
            min-height: 100vh;
        }

        .split-layout {
            display: grid;
            grid-template-columns: 350px 1fr;
            min-height: 100vh;
        }

        /* Left Column */
        .left-column {
            border-right: 1px solid rgba(255,255,255,0.1);
            position: relative;
        }

        .sticky-content {
            position: sticky;
            top: 0;
            height: 100vh;
            padding: 120px 40px 40px;
            display: flex;
            flex-direction: column;
        }

        .mono-label {
            font-family: monospace;
            text-transform: uppercase;
            font-size: 0.75rem;
            letter-spacing: 0.1em;
            color: var(--color-white-dim);
            display: block;
            margin-bottom: 16px;
        }

        .header-block {
            margin-bottom: 80px;
        }

        .header-block h1 {
            font-size: 3.5rem;
            line-height: 1;
            text-transform: uppercase;
            margin: 0;
        }

        .filter-system {
            margin-bottom: auto;
        }

        .filter-header {
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 12px;
            margin-bottom: 24px;
        }

        .filter-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .tech-filter-btn {
            background: transparent;
            border: 1px solid transparent; /* invisible border to prevent layout shift */
            color: var(--color-white-dim);
            text-align: left;
            font-family: monospace;
            font-size: 0.9rem;
            text-transform: uppercase;
            cursor: pointer;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s;
        }

        .tech-filter-btn .dot {
            width: 6px;
            height: 6px;
            background: var(--color-white-dim);
            border-radius: 50%;
            transition: background 0.3s;
        }

        .tech-filter-btn:hover, .tech-filter-btn.active {
            color: var(--color-white);
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255,255,255,0.1);
        }

        .tech-filter-btn.active .dot {
            background: var(--color-gold);
            box-shadow: 0 0 10px var(--color-gold);
        }

        .tech-stat-block {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 24px;
        }

        .stat-row {
            display: flex;
            justify-content: space-between;
            font-family: monospace;
            font-size: 0.8rem;
            margin-bottom: 8px;
            text-transform: uppercase;
            color: var(--color-white-dim);
        }

        /* Right Column */
        .right-column {
            padding: 120px 60px;
        }

        .projects-tech-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* 2 Column Grid */
            gap: 40px;
        }

        .tech-project-card {
            border: 1px solid rgba(255,255,255,0.1);
            background: rgba(255,255,255,0.01);
            transition: all 0.4s ease;
        }

        .tech-project-card:hover {
            border-color: var(--color-gold);
            transform: translateY(-5px);
        }

        .card-media {
            position: relative;
            aspect-ratio: 16/9;
            overflow: hidden;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .card-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tech-project-card:hover .card-media img {
            transform: scale(1.05);
        }

        .card-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .tech-project-card:hover .card-overlay {
            opacity: 1;
        }

        .view-text {
            border: 1px solid var(--color-gold);
            color: var(--color-gold);
            padding: 8px 16px;
            font-size: 0.8rem;
            background: rgba(0,0,0,0.8);
        }

        .card-details {
            padding: 24px;
        }

        .card-header {
            margin-bottom: 24px;
        }

        .card-header h3 {
            font-size: 1.5rem;
            margin: 8px 0 0;
            font-weight: 400;
        }

        .specs-preview {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            padding-top: 16px;
            border-top: 1px solid rgba(255,255,255,0.05);
        }

        .mini-spec {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .mini-spec .label {
            font-family: monospace;
            font-size: 0.7rem;
            color: var(--color-white-dim);
            text-transform: uppercase;
        }

        .mini-spec .value {
            font-size: 0.9rem;
            color: var(--color-white);
        }

        @media (max-width: 1024px) {
            .split-layout {
                grid-template-columns: 1fr;
            }
            .left-column {
                border-right: none;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            }
            .sticky-content {
                position: relative;
                height: auto;
                padding: 100px 24px 40px;
            }
            .right-column {
                padding: 60px 24px;
            }
            .projects-tech-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
    </div>
  );
};

export default Projects;
