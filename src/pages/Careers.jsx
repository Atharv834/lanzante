import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import NoiseOverlay from '../components/premium/NoiseOverlay';
import '../index.css';

const JobItem = ({ title, location, type, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="job-item border-bottom">
            <div
                className="job-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="job-main-info">
                    <h3>{title}</h3>
                    <div className="job-meta-row">
                        <span className="mono-text">{location}</span>
                        <span className="separator">/</span>
                        <span className="mono-text">{type}</span>
                    </div>
                </div>
                <div className={`arrow-indicator ${isOpen ? 'open' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 9L12 15L18 9" />
                    </svg>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="job-details"
                    >
                        <p>{description}</p>
                        <Link to="/contact" className="apply-btn-tech">
                            Apply for Role
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Careers = () => {
    return (
        <div className="page-wrapper careers-split-page">
            <NoiseOverlay />

            <div className="split-layout">
                {/* Fixed Left Column */}
                <div className="left-column">
                    <div className="sticky-content">
                        <div className="hero-block">
                            <span className="mono-label text-gold">04 // Careers</span>
                            <h1>Join<br />The<br />Team</h1>
                        </div>
                        <div className="technical-specs">
                            <div className="spec-row">
                                <span className="label">HQ</span>
                                <span className="value">Petersfield, UK</span>
                            </div>
                            <div className="spec-row">
                                <span className="label">Focus</span>
                                <span className="value">Motorsport Eng.</span>
                            </div>
                            <div className="spec-row">
                                <span className="label">Status</span>
                                <span className="value text-gold">Hiring Active</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrollable Right Column */}
                <div className="right-column">
                    <section className="intro-manifesto">
                        <p className="lead">
                            We are not looking for employees. We are looking for custodians of history.
                        </p>
                        <p>
                            Lanzante is built on an obsession with detail. Whether we are maintaining a McLaren F1 GTR or restoring a Porsche 935, the standard is absolute perfection. We operate at the intersection of history and high-performance engineering.
                        </p>
                    </section>

                    <section className="positions-list">
                        <div className="list-header">
                            <span className="mono-label">Open Positions [04]</span>
                        </div>

                        <JobItem
                            title="Senior Heritage Technician"
                            location="Petersfield"
                            type="Full Time"
                            description="Lead the restoration and maintenance of high-value historic competition vehicles. Requires 10+ years experience with Le Mans era prototypes and GT cars. Meticulous attention to detail and historical accuracy is paramount."
                        />
                        <JobItem
                            title="Composite Design Engineer"
                            location="Petersfield"
                            type="Full Time"
                            description="Design and engineer bespoke carbon fibre components for our 'Road Legal' conversion programs. Must be proficient in CAD/FEA and understanding of pre-preg composite manufacturing."
                        />
                        <JobItem
                            title="Logistics Coordinator"
                            location="Petersfield"
                            type="Full Time"
                            description="Manage the global movement of multi-million pound assets to events and clients worldwide. Complexity handling customs, carnets, and secure transport is essential."
                        />
                        <JobItem
                            title="Apprentice Mechanic"
                            location="Petersfield"
                            type="Apprenticeship"
                            description="A rare opportunity to learn from the best in the industry. We are looking for raw talent and dedication. If you have the aptitude and the right attitude, we will teach you the skills."
                        />
                    </section>

                    <section className="footer-note">
                        <p>Don't see your specialized role?</p>
                        <Link to="/contact" className="text-gold">Send us your credentials &rarr;</Link>
                    </section>
                </div>
            </div>

            <style>{`
                .careers-split-page {
                    background-color: var(--color-black);
                    min-height: 100vh;
                }

                .split-layout {
                    display: grid;
                    grid-template-columns: 400px 1fr;
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
                    justify-content: space-between;
                }

                .mono-label {
                    font-family: monospace;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 0.1em;
                    display: block;
                    margin-bottom: 24px;
                }

                .hero-block h1 {
                    font-size: 5rem;
                    line-height: 0.9;
                    text-transform: uppercase;
                    margin: 0;
                }

                .technical-specs {
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 32px;
                }

                .spec-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 12px;
                    font-family: monospace;
                    font-size: 0.85rem;
                }

                .spec-row .label {
                    color: var(--color-white-dim);
                }

                /* Right Column */
                .right-column {
                    padding: 120px 80px;
                }

                .intro-manifesto {
                    max-width: 800px;
                    margin-bottom: 160px;
                }

                .lead {
                    font-size: 2rem;
                    line-height: 1.4;
                    margin-bottom: 32px;
                    color: var(--color-white);
                }

                .intro-manifesto p {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: var(--color-white-dim);
                }

                /* Job List */
                .list-header {
                    border-bottom: 1px solid var(--color-white);
                    padding-bottom: 16px;
                    margin-bottom: 0;
                }

                .job-item {
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }

                .job-header {
                    padding: 40px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .job-header:hover h3 {
                    color: var(--color-gold);
                }

                .job-main-info h3 {
                    font-size: 2rem;
                    margin-bottom: 8px;
                    transition: color 0.3s;
                }

                .job-meta-row {
                    font-family: monospace;
                    color: var(--color-white-dim);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                }

                .separator {
                    margin: 0 8px;
                    color: var(--color-gold);
                }

                .arrow-indicator {
                    transition: transform 0.4s;
                    color: var(--color-white-dim);
                }

                .arrow-indicator.open {
                    transform: rotate(180deg);
                    color: var(--color-gold);
                }

                .job-details {
                    padding-bottom: 40px;
                    overflow: hidden;
                    max-width: 700px;
                }

                .job-details p {
                    color: var(--color-white-dim);
                    line-height: 1.6;
                    margin-bottom: 24px;
                }

                .apply-btn-tech {
                    display: inline-block;
                    border: 1px solid var(--color-gold);
                    color: var(--color-gold);
                    padding: 12px 24px;
                    font-family: monospace;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    transition: all 0.3s;
                }

                .apply-btn-tech:hover {
                    background: var(--color-gold);
                    color: var(--color-black);
                }

                .footer-note {
                    margin-top: 120px;
                    padding-top: 40px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    color: var(--color-white-dim);
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
                        padding: 120px 24px 60px;
                    }

                    .right-column {
                        padding: 60px 24px;
                    }

                    .hero-block h1 {
                        font-size: 4rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Careers;
