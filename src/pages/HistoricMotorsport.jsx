import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NoiseOverlay from '../components/premium/NoiseOverlay';
import '../index.css';

const ServiceItem = ({ number, title, description, image }) => (
    <div className="service-item border-bottom">
        <div className="service-content">
            <div className="service-header">
                <span className="mono-label text-gold">Protocol {number}</span>
                <h3>{title}</h3>
                <p className="service-desc">{description}</p>
            </div>
            <div className="service-image">
                <img src={image} alt={title} />
                <div className="overlay"></div>
            </div>
        </div>
    </div>
);

const HistoricMotorsport = () => {
    return (
        <div className="page-wrapper historic-tech-page">
            <NoiseOverlay />

            <div className="split-layout">
                {/* Left Column */}
                <div className="left-column">
                    <div className="sticky-content">
                        <div className="header-block">
                            <span className="mono-label text-gold">03 // Heritage</span>
                            <h1 className="responsive-h1">Historic<br />Motorsport</h1>
                        </div>

                        <div className="technical-specs">
                            <div className="spec-row">
                                <span className="label">Department</span>
                                <span className="value">Restoration / Race Prep</span>
                            </div>
                            <div className="spec-row">
                                <span className="label">Standard</span>
                                <span className="value">FIA / ACO Compliant</span>
                            </div>
                            <div className="spec-row">
                                <span className="label">Facility</span>
                                <span className="value">Petersfield, UK</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="right-column">
                    <section className="intro-manifesto">
                        <p className="lead">
                            Preserving the past via engineering excellence.
                        </p>
                        <p>
                            We do not simply repair cars; we maintain legends. Our historic motorsport division is dedicated to the preservation, preparation, and management of the world's most significant competition vehicles.
                        </p>
                    </section>

                    <section className="services-list">
                        <div className="list-header">
                            <span className="mono-label">Service Division</span>
                        </div>

                        <ServiceItem
                            number="01"
                            title="Restoration"
                            description="We return historic racing machines to their period-correct glory. Every bolt, every panel, every component is researched and restored with obsessive attention to detail, ensuring historical accuracy while maintaining competitive performance."
                            image="/lanzante/assets/project-tag-turbo.png"
                        />
                        <ServiceItem
                            number="02"
                            title="Race Preparation"
                            description="Our cars don't just sit in museums; they race. We prepare vehicles for Goodwood, Le Mans Classic, and the world's most prestigious historic events. Our track-side support ensures that both car and driver perform at their peak."
                            image="/lanzante/assets/service-performance.png"
                        />
                        <ServiceItem
                            number="03"
                            title="Collection Management"
                            description="Complete curation services for the world's most significant private collections. From routine maintenance to global logistics, we handle the complexities of ownership so you can focus on driving."
                            image="/lanzante/assets/service-legacy.png"
                        />
                    </section>

                    <section className="cta-technical">
                        <div className="cta-content">
                            <h2>Entrust Your Legend</h2>
                            <p>Have a project in mind for our workshop?</p>
                            <Link to="/contact" className="tech-btn">
                                <span className="bracket">[</span> Initiate Inquiry <span className="bracket">]</span>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

            <style>{`
                .historic-tech-page {
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

                .responsive-h1 {
                    font-size: clamp(3rem, 5vw, 4.5rem); /* Responsive font size */
                    line-height: 0.9;
                    text-transform: uppercase;
                    margin: 0;
                    word-wrap: break-word; /* Prevent overflow */
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
                    margin-bottom: 120px;
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

                /* Services List */
                .list-header {
                    border-bottom: 1px solid var(--color-white);
                    padding-bottom: 16px;
                    margin-bottom: 0;
                }

                .service-item {
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    padding: 80px 0;
                }

                .service-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }

                .service-header h3 {
                    font-size: 2.5rem;
                    font-weight: 400;
                    margin: 16px 0;
                }

                .service-desc {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: var(--color-white-dim);
                }

                .service-image {
                    position: relative;
                    aspect-ratio: 4/3;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.1);
                }

                .service-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                    filter: grayscale(100%);
                }

                .service-item:hover .service-image img {
                    transform: scale(1.05);
                    filter: grayscale(0%);
                }

                /* CTA Section */
                .cta-technical {
                    margin-top: 120px;
                    padding: 80px;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.05);
                }

                .cta-content h2 {
                    font-size: 2.5rem;
                    margin-bottom: 16px;
                    text-transform: uppercase;
                }

                .cta-content p {
                    color: var(--color-white-dim);
                    margin-bottom: 40px;
                }

                .tech-btn {
                    font-family: monospace;
                    text-transform: uppercase;
                    color: var(--color-gold);
                    font-size: 1.1rem;
                    letter-spacing: 0.1em;
                    transition: all 0.3s;
                }

                .tech-btn:hover {
                    color: var(--color-white);
                    text-shadow: 0 0 10px rgba(255,255,255,0.5);
                }

                .tech-btn .bracket {
                    color: var(--color-white-dim);
                    transition: margin 0.3s;
                }

                .tech-btn:hover .bracket {
                    margin: 0 5px;
                    color: var(--color-gold);
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
                    .service-content {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .responsive-h1 {
                        font-size: 3.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default HistoricMotorsport;
