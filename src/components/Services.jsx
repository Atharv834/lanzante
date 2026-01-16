import '../index.css';

const services = [
  {
    id: 1,
    title: 'Heritage',
    subtitle: 'Restoration & Maintenance',
    image: '/lanzante/assets/service-legacy.png',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Performance',
    subtitle: 'Track Engineering',
    image: '/lanzante/assets/service-performance.png',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Bespoke',
    subtitle: 'Custom Commission',
    image: '/lanzante/assets/service-bespoke.png',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="card">
              <div className="card-image">
                <img src={service.image} alt={service.title} />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <div className="card-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
              </div>
              <div className="card-hover-content">
                <span className="explore-text text-gold">Explore {service.title} &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services {
          padding: 120px 0;
          background-color: var(--color-charcoal);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .card {
          position: relative;
          height: 600px;
          background: #121212;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .card:hover {
          transform: translateY(-10px);
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .card:hover .card-image img {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 10, 10, 0.9) 0%,
            rgba(10, 10, 10, 0.2) 60%,
            transparent 100%
          );
        }

        .card-content {
          position: absolute;
          bottom: 48px;
          left: 32px;
          z-index: 2;
          transition: var(--transition-smooth);
        }
        
        .card:hover .card-content {
          transform: translateY(-20px);
        }

        .card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          margin-bottom: 24px;
          color: var(--color-gold);
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(4px);
        }

        .card h3 {
          font-size: 1.8rem;
          margin-bottom: 8px;
          color: var(--color-white);
        }

        .card p {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--color-white-dim);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .card-hover-content {
            position: absolute;
            bottom: 32px;
            left: 32px;
            opacity: 0;
            transform: translateY(10px);
            transition: var(--transition-smooth);
            transition-delay: 0.1s;
        }
        
        .card:hover .card-hover-content {
            opacity: 1;
            transform: translateY(0);
        }
        
        .explore-text {
            font-family: var(--font-sans);
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .card {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
