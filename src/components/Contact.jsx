import '../index.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container contact-grid">
                <div className="contact-info">
                    <h2>Inquire</h2>
                    <p className="contact-subtitle">Start your journey with Lanzante.</p>

                    <div className="info-item">
                        <span className="info-icon text-gold">📍</span>
                        <div>
                            <p>Lanzante Limited</p>
                            <p>Headquarters, Petersfield</p>
                            <p>United Kingdom</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon text-gold">✉️</span>
                        <div>
                            <p>inquiries@lanzante.com</p>
                        </div>
                    </div>

                    <div className="map-widget">
                        {/* Map Placeholder */}
                        <div className="map-placeholder">
                            <span>Interactive Map Loading...</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="ghost-input" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" className="ghost-input" />
                        </div>
                        <div className="form-group">
                            <select className="ghost-input">
                                <option value="" disabled selected>Interest</option>
                                <option value="restoration">Heritage Restoration</option>
                                <option value="engineering">Performance Engineering</option>
                                <option value="bespoke">Bespoke Commission</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="4" className="ghost-input"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Inquiry</button>
                    </form>
                </div>
            </div>

            <style>{`
        .contact {
          padding: 120px 0;
          background-color: var(--color-black);
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }

        .contact-subtitle {
          color: var(--color-white-dim);
          margin-bottom: 48px;
          font-size: 1.1rem;
        }

        .info-item {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
          font-family: var(--font-sans);
          color: var(--color-white);
        }
        
        .info-icon {
          font-size: 1.2rem;
        }

        .map-widget {
          margin-top: 48px;
          width: 100%;
          height: 200px;
          background: #1a1a1a;
          border: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          font-family: var(--font-sans);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
        }

        .contact-form {
          padding: 48px;
          background: rgba(18, 18, 18, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .form-group {
          margin-bottom: 32px;
        }

        .ghost-input {
          width: 100%;
          padding: 16px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--color-white);
          font-family: var(--font-sans);
          font-size: 1rem;
          transition: var(--transition-smooth);
        }

        .ghost-input:focus {
          outline: none;
          border-bottom-color: var(--color-gold);
        }

        /* Select placeholder color hack */
        select.ghost-input {
           color: var(--color-white-dim);
        }
        select.ghost-input option {
           background: var(--color-black);
           color: var(--color-white);
        }

        .btn {
          margin-top: 16px;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .contact-form {
            padding: 24px;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;
