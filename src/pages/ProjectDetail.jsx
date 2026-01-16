import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import '../index.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
                <h2>Project Not Found</h2>
                <Link to="/projects" className="text-gold">Return to Projects</Link>
            </div>
        );
    }

    return (
        <div className="project-detail">
            <div className="detail-hero">
                <img src={project.image} alt={project.name} />
                <div className="overlay"></div>
                <div className="container detail-hero-content">
                    <h1 className="animate-fade-in-up">{project.name}</h1>
                    <p className="subtitle animate-fade-in-up text-gold">{project.tagline}</p>
                </div>
            </div>

            <div className="container detail-content">
                <div className="detail-grid">
                    <div className="description">
                        <h2>Overview</h2>
                        <p>{project.description}</p>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>Inquire Interest</Link>
                    </div>

                    <div className="specs">
                        <h3>Specifications</h3>
                        <div className="specs-list">
                            {project.specs.map((spec, i) => (
                                <div key={i} className="spec-item">
                                    <span className="label">{spec.label}</span>
                                    <span className="value text-gold">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .detail-hero {
            height: 80vh;
            position: relative;
        }
        
        .detail-hero img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .detail-hero .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, #0a0a0a 0%, transparent 50%);
        }
        
        .detail-hero-content {
            position: absolute;
            bottom: 80px;
            left: 0;
            right: 0;
            margin: auto;
        }
        
        .detail-hero-content h1 {
            font-size: clamp(2.5rem, 5vw, 4.5rem);
            margin-bottom: 16px;
        }
        
        .detail-hero-content .subtitle {
            font-size: 1.5rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }
        
        .detail-content {
            padding: 80px 24px;
        }
        
        .detail-grid {
            display: grid;
            grid-template-columns: 3fr 2fr;
            gap: 80px;
        }
        
        .description p {
            font-size: 1.2rem;
            line-height: 1.8;
            color: var(--color-white-dim);
        }
        
        .specs {
            background: #121212;
            padding: 40px;
            border: 1px solid rgba(255,255,255,0.05);
        }
        
        .specs h3 {
            margin-bottom: 32px;
            font-size: 1.5rem;
            border-bottom: 2px solid var(--color-gold);
            padding-bottom: 16px;
            display: inline-block;
        }
        
        .spec-item {
            display: flex;
            justify-content: space-between;
            padding: 16px 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .spec-item:last-child {
            border-bottom: none;
        }
        
        .spec-item .label {
            color: var(--color-white-dim);
            text-transform: uppercase;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
        }
        
        .spec-item .value {
            font-weight: 600;
            font-family: var(--font-sans);
        }
        
        @media (max-width: 900px) {
            .detail-grid {
                grid-template-columns: 1fr;
                gap: 48px;
            }
        }
      `}</style>
        </div>
    );
};

export default ProjectDetail;
