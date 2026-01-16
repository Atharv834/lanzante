import '../index.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title animate-fade-in-up">
                    <div>LEGACY.</div>
                    <div>PERFORMANCE.</div>
                    <div className="text-gold">BESPOKE.</div>
                </h1>

                <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <a href="#services" className="btn btn-primary">Discover</a>
                    <a href="#contact" className="btn btn-secondary">Inquire</a>
                </div>
            </div>

            <style>{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          background-image: url('/assets/hero-bg.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(10, 10, 10, 0.3) 0%,
            rgba(10, 10, 10, 0.6) 50%,
            rgba(10, 10, 10, 1) 100%
          );
          /* Radial vignette */
          background: radial-gradient(circle at center, transparent 0%, #0a0a0a 140%),
                      linear-gradient(to top, #0a0a0a 0%, transparent 50%);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          padding-top: 80px; /* Offset for navbar */
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 1.1;
          margin-bottom: 48px;
        }

        .hero-actions {
          display: flex;
          gap: 24px;
        }

        .btn {
          padding: 16px 48px;
          text-transform: uppercase;
          font-family: var(--font-sans);
          font-weight: 500;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-primary {
          background-color: var(--color-gold);
          color: var(--color-black);
          border: 1px solid var(--color-gold);
        }
        
        .btn-primary:hover {
          background-color: var(--color-white);
          border-color: var(--color-white);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--color-white);
          border: 1px solid var(--color-white);
        }

        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: var(--color-gold);
          color: var(--color-gold);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-actions {
            flex-direction: column;
            align-items: flex-start;
          }
          .btn {
             width: 100%;
             text-align: center;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
