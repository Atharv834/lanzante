import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RainEffect from '../components/premium/RainEffect';
import '../index.css';

const LeMans95 = () => {
    return (
        <div className="page-wrapper lemans-page">
            <RainEffect opacity={0.15} />

            <div className="lemans-hero">
                <div className="hero-bg-wrapper">
                    <img src="/lanzante/assets/history-lemans.png" alt="McLaren F1 GTR #59" />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="badge">18 June 1995</div>
                        <h1 className="glitch-text" data-text="59">The Legend of #59</h1>
                        <p className="subtitle text-gold">The Improbable Victory</p>
                    </motion.div>
                </div>
            </div>

            <section className="story-section container">
                <div className="story-grid">
                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-gold">The Longest Night</h2>
                        <p>
                            It was never meant to win. The McLaren F1 GTR was a GT car, racing against purpose-built prototypes.
                            But as the heavens opened over Circuit de la Sarthe, the playing field leveled.
                        </p>
                        <p>
                            While faster prototypes faltered in the treacherous conditions, the Kokusai Kaihatsu Racing F1 GTR,
                            prepared by Paul Lanzante, kept going. JJ Lehto, Yannick Dalmas, and Masanori Sekiya drove with
                            surgical precision through the darkness and rain.
                        </p>
                    </motion.div>
                    <div className="story-stat-box">
                        <div className="stat-row">
                            <span className="label">Laps Completed</span>
                            <span className="value text-gold">298</span>
                        </div>
                        <div className="stat-row">
                            <span className="label">Distance</span>
                            <span className="value text-gold">4,055 km</span>
                        </div>
                        <div className="stat-row">
                            <span className="label">Average Speed</span>
                            <span className="value text-gold">168.99 km/h</span>
                        </div>
                        <div className="stat-row">
                            <span className="label">Margin of Victory</span>
                            <span className="value text-gold">1 Lap</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="quote-section">
                <div className="container">
                    <blockquote>
                        "We didn't go there to win. We went there to finish. But as the night wore on, we realized... we could actually do this."
                        <footer className="text-gold">- Paul Lanzante</footer>
                    </blockquote>
                </div>
            </section>

            <section className="legacy-section container">
                <div className="legacy-content centered">
                    <h2>The Legacy Continues</h2>
                    <p>
                        That victory didn't just make history; it defined our future. The spirit of '95 lives in every car we touch,
                        from the P1 LM to the P1 GTR-18. We are the custodians of the F1 GTR legacy.
                    </p>
                    <Link to="/projects" className="btn btn-primary" style={{ marginTop: '32px' }}>
                        View The Tributes
                    </Link>
                </div>
            </section>

            <style>{`
                .lemans-page {
                    background-color: var(--color-black);
                }

                .lemans-hero {
                    height: 100vh;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    overflow: hidden;
                }

                .badge {
                    display: inline-block;
                    border: 1px solid var(--color-gold);
                    padding: 8px 16px;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 24px;
                    color: var(--color-gold);
                }

                .lemans-hero h1 {
                    font-size: clamp(4rem, 10vw, 10rem);
                    line-height: 0.9;
                    margin-bottom: 16px;
                }

                .story-section {
                    padding: 160px 24px;
                }

                .story-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }

                .story-content p {
                    font-size: 1.2rem;
                    line-height: 1.8;
                    color: var(--color-white-dim);
                    margin-bottom: 24px;
                }

                .story-stat-box {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.05);
                    padding: 40px;
                }

                .stat-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 20px 0;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }

                .stat-row:last-child {
                    border-bottom: none;
                }

                .stat-row .label {
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-white-dim);
                }

                .stat-row .value {
                    font-family: var(--font-sans);
                    font-weight: 600;
                    font-size: 1.2rem;
                }

                .quote-section {
                    padding: 120px 0;
                    background: linear-gradient(to right, #0a0a0a, #111);
                    text-align: center;
                }

                blockquote {
                    font-family: var(--font-serif);
                    font-size: clamp(1.5rem, 3vw, 2.5rem);
                    font-style: italic;
                    color: var(--color-white);
                    max-width: 900px;
                    margin: 0 auto;
                }

                blockquote footer {
                    font-family: var(--font-sans);
                    font-style: normal;
                    font-size: 1rem;
                    margin-top: 32px;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                }

                .legacy-section {
                    padding: 160px 24px;
                }

                .legacy-content.centered {
                    max-width: 700px;
                    margin: 0 auto;
                    text-align: center;
                }

                .legacy-content p {
                    font-size: 1.3rem;
                    line-height: 1.6;
                    color: var(--color-white-dim);
                    margin-bottom: 0;
                }

                @media (max-width: 900px) {
                    .story-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }
            `}</style>
        </div>
    );
};

export default LeMans95;
