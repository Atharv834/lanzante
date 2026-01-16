import { motion } from 'framer-motion';
import RainEffect from '../components/premium/RainEffect';
import '../index.css';

const TimelineItem = ({ year, title, description, side, delay }) => {
    return (
        <motion.div
            className={`timeline-row ${side}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delay }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="timeline-content">
                <span className="year-label text-gold">{year}</span>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="timeline-marker"></div>
        </motion.div>
    );
};

const History = () => {
    return (
        <div className="page-wrapper history-page">
            {/* Hero Section */}
            <div className="history-hero">
                <RainEffect />
                <div className="hero-bg-wrapper">
                    <img src="/assets/history-lemans.png" alt="1995 Le Mans" />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="glitch-text" data-text="1995 Le Mans">1995 Le Mans</h1>
                        <p className="subtitle text-gold">The Night We Conquered The Impossible</p>
                    </motion.div>
                </div>

                <div className="scroll-indicator">
                    <span>Explore the Legacy</span>
                    <div className="line"></div>
                </div>
            </div>

            {/* Narrative Section */}
            <div className="container history-narrative">
                <motion.div
                    className="narrative-block centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-gold">Against All Odds</h2>
                    <p className="lead-text">
                        Lanzante Motorsport, led by Paul Lanzante, took a <span className="highlight">McLaren F1 GTR (#01R)</span> to the 24 Hours of Le Mans.
                        Competing under Kokusai Kaihatsu Racing, the car was not the fastest in qualifying. But in the rain, at night,
                        while prototypes failed, reliability and strategy prevailed.
                    </p>
                </motion.div>
            </div>

            {/* Timeline Section */}
            <div className="timeline-section">
                <div className="timeline-center-line"></div>
                <div className="container">
                    <TimelineItem
                        side="left"
                        year="1970s"
                        title="The Beginning"
                        description="Paul Lanzante establishes the company, building a reputation for restoring and preparing historic racing cars with uncompromising attention to detail."
                        delay={0.1}
                    />
                    <TimelineItem
                        side="right"
                        year="1995"
                        title="Victory at La Sarthe"
                        description="A debut win for McLaren and Lanzante. The F1 GTR #59 crosses the line first overall, securing its place in motorsport legend."
                        delay={0.2}
                    />
                    <TimelineItem
                        side="left"
                        year="2016"
                        title="The P1 LM"
                        description="Lanzante converts the P1 GTR for the road. The P1 LM smashes the Nürburgring lap record, proving the GTR's DNA belongs on the street."
                        delay={0.3}
                    />
                    <TimelineItem
                        side="right"
                        year="Present"
                        title="Engineering Art"
                        description="Today, we continue the legacy with bespoke commissions like the P1 GTR-18 and the TAG Turbo, merging historic F1 engines with road car chassis."
                        delay={0.4}
                    />
                </div>
            </div>

            <style>{`
        .history-page {
            background-color: var(--color-black);
            overflow: hidden;
        }

        /* Hero */
        .history-hero {
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-bg-wrapper {
            position: absolute;
            inset: 0;
            z-index: 1;
        }

        .hero-bg-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            /* Subtle zoom animation */
            animation: zoomSlow 20s infinite alternate;
        }
        
        @keyframes zoomSlow {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
        }
        
        .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(10,10,10,0.95) 100%);
        }
        
        .history-hero .hero-content {
            position: relative;
            z-index: 3;
            text-align: center;
        }
        
        .history-hero h1 {
            font-size: clamp(3rem, 6vw, 6rem);
            margin-bottom: 16px;
            text-shadow: 0 0 20px rgba(0,0,0,0.8);
        }
        
        .history-hero .subtitle {
            font-size: clamp(1rem, 1.5vw, 1.5rem);
            letter-spacing: 0.2em;
            text-transform: uppercase;
        }
        
        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            opacity: 0.7;
        }
        
        .scroll-indicator span {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
        
        .scroll-indicator .line {
            width: 1px;
            height: 60px;
            background: linear-gradient(to bottom, var(--color-gold), transparent);
        }

        /* Narrative */
        .history-narrative {
            position: relative;
            z-index: 2;
            padding: 120px 24px;
        }
        
        .narrative-block.centered {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        
        .narrative-block h2 {
            font-size: 2.5rem;
            margin-bottom: 32px;
            letter-spacing: 0.1em;
        }
        
        .lead-text {
            font-size: 1.5rem;
            line-height: 1.6;
            color: #ccc;
        }
        
        .highlight {
            color: var(--color-white);
            font-weight: 600;
        }

        /* Timeline */
        .timeline-section {
            position: relative;
            padding: 120px 0;
            background: linear-gradient(to bottom, #0a0a0a, #111);
        }
        
        .timeline-center-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 1px;
            background: linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.3), transparent);
            transform: translateX(-50%);
        }
        
        .timeline-row {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-bottom: 60px; /* Reduced from 120px */
        }
        
        .timeline-row .timeline-content {
            width: 40%;
            padding: 40px;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            transition: var(--transition-smooth);
        }
        
        .timeline-row:hover .timeline-content {
            border-color: rgba(212, 175, 55, 0.2);
            transform: translateY(-5px);
        }
        
        .timeline-row.left {
            justify-content: flex-start;
            padding-right: 50%;
        }
        
        .timeline-row.left .timeline-content {
            margin-left: auto;
            margin-right: 40px;
            text-align: right;
        }
        
        .timeline-row.right {
            justify-content: flex-end;
            padding-left: 50%;
        }
        
        .timeline-row.right .timeline-content {
            margin-left: 40px;
            margin-right: auto;
            text-align: left;
        }
        
        .timeline-marker {
            position: absolute;
            left: 50%;
            width: 12px;
            height: 12px;
            background: var(--color-black);
            border: 2px solid var(--color-gold);
            border-radius: 50%;
            transform: translateX(-50%);
            z-index: 2;
        }
        
        .year-label {
            font-family: var(--font-serif);
            font-size: 2.5rem;
            display: block;
            margin-bottom: 8px;
            opacity: 0.8;
        }
        
        .timeline-content h3 {
            font-size: 1.5rem;
            margin-bottom: 16px;
            color: var(--color-white);
        }
        
        .timeline-content p {
            font-size: 1rem;
            color: var(--color-white-dim);
            line-height: 1.6;
        }
        
        @media (max-width: 768px) {
            .timeline-center-line {
                left: 24px;
            }
            
            .timeline-row {
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: 80px;
            }
            .timeline-row.left, .timeline-row.right {
                padding: 0;
                justify-content: flex-start;
                padding-left: 60px;
            }
            .timeline-row.left .timeline-content, .timeline-row.right .timeline-content {
                width: 100%;
                margin: 0;
                text-align: left;
            }
            .timeline-marker {
                left: 24px;
            }
        }
      `}</style>
        </div>
    );
};

export default History;
