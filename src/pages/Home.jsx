import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TextReveal from '../components/premium/TextReveal';
import '../index.css';

const Home = () => {
    return (
        <div className="page-wrapper home-page">
            <section className="hero-section">
                <div className="video-bg-placeholder">
                    {/* In established projects, this would be a video. Using high-res image for now */}
                    <div className="hero-image-scale">
                        <img src="/lanzante/assets/hero-bg.png" alt="P1 GTR" />
                    </div>
                    <div className="overlay"></div>
                </div>

                <div className="hero-content container">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        The Midnight<br /><span className="text-gold">Garage</span>
                    </motion.h1>
                    <motion.div
                        className="hero-cta-group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <Link to="/projects" className="btn btn-primary">View Projects</Link>
                        <Link to="/history" className="btn btn-secondary">Our Legacy</Link>
                    </motion.div>
                </div>
            </section>

            <section className="intro-section container">
                <div className="intro-grid">
                    <div className="intro-label text-gold">Manifesto</div>
                    <div className="intro-text-wrapper">
                        <TextReveal className="intro-text">
                            We do not build for the faint of heart. We build for the drivers who demand the impossible. From Le Mans to the Nürburgring, Lanzante stands at the apex of automotive engineering.
                        </TextReveal>
                    </div>
                </div>
            </section>

            <style>{`
          .hero-section {
              height: 100vh;
              position: relative;
              display: flex;
              align-items: center;
              overflow: hidden;
          }
          
          .video-bg-placeholder {
              position: absolute;
              inset: 0;
              z-index: 1;
          }
          
          .hero-image-scale {
              width: 100%;
              height: 100%;
              animation: zoomSlow 20s infinite alternate;
          }
          
          .hero-image-scale img {
              width: 100%;
              height: 100%;
              object-fit: cover;
          }
          
          .overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(10,10,10,1));
          }
          
          .hero-content h1 {
              font-size: clamp(3rem, 8vw, 8rem);
              line-height: 0.9;
              margin-bottom: 40px;
              position: relative;
              z-index: 2;
          }
          
          .hero-cta-group {
              display: flex;
              gap: 24px;
              position: relative;
              z-index: 2;
          }
          
          .intro-section {
              padding: 160px 24px;
          }
          
          .intro-grid {
              display: grid;
              grid-template-columns: 200px 1fr;
              gap: 40px;
          }
          
          .intro-label {
              font-family: var(--font-serif);
              font-size: 0.9rem;
              text-transform: uppercase;
              letter-spacing: 0.2em;
          }
          
          .intro-text {
              font-size: clamp(1.5rem, 3vw, 3rem);
              line-height: 1.2;
          }
          
          @media (max-width: 768px) {
              .intro-grid {
                  grid-template-columns: 1fr;
                  gap: 16px;
              }
              .hero-cta-group {
                  flex-direction: column;
                  align-items: flex-start;
              }
          }
      `}</style>
        </div>
    );
};

export default Home;
