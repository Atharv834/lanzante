import { useState } from 'react';
import { motion } from 'framer-motion';
import NoiseOverlay from '../components/premium/NoiseOverlay';
import '../index.css';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
        // Add actual submission logic here
        alert('Thank you. We will be in touch shortly.');
    };

    return (
        <div className="page-wrapper contact-page">
            <NoiseOverlay />

            <div className="contact-hero container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-label text-gold">Inquiries</span>
                    <h1>Get In Touch</h1>
                </motion.div>
            </div>

            <div className="container contact-grid">
                <div className="contact-info">
                    <div className="info-block">
                        <h3>Headquarters</h3>
                        <p>
                            Lanzante Limited<br />
                            The Old Barn, Sonya's Farm<br />
                            Petersfield, Hampshire<br />
                            United Kingdom
                        </p>
                    </div>

                    <div className="info-block">
                        <h3>Contact</h3>
                        <p>
                            <a href="mailto:info@lanzante.com" className="hover-gold">info@lanzante.com</a><br />
                            <a href="tel:+441234567890" className="hover-gold">+44 (0) 1234 567 890</a>
                        </p>
                    </div>

                    <div className="info-block">
                        <h3>Press & Media</h3>
                        <p>
                            <a href="mailto:media@lanzante.com" className="hover-gold">media@lanzante.com</a>
                        </p>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formState.subject}
                                onChange={handleChange}
                            >
                                <option value="general">General Inquiry</option>
                                <option value="commission">Commission / Restoration</option>
                                <option value="careers">Careers</option>
                                <option value="press">Press / Media</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formState.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-section">
                <div className="map-overlay">
                    <span className="text-gold">Petersfield, UK</span>
                </div>
                {/* In a real app, embed Google Maps iframe here with a custom dark style */}
                <div className="map-bg"></div>
            </div>

            <style>{`
                .contact-page {
                    background-color: var(--color-black);
                    padding-top: 160px;
                }

                .contact-hero {
                    margin-bottom: 80px;
                }

                .hero-label {
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    font-size: 0.9rem;
                    display: block;
                    margin-bottom: 16px;
                }

                .contact-hero h1 {
                    font-size: clamp(3rem, 7vw, 6rem);
                    line-height: 1;
                    margin: 0;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 80px;
                    padding-bottom: 160px;
                }

                .info-block {
                    margin-bottom: 48px;
                }

                .info-block h3 {
                    font-size: 1.2rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 16px;
                    color: var(--color-gold);
                }

                .info-block p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: var(--color-white-dim);
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .form-group label {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-white-dim);
                }

                .form-group input, 
                .form-group select, 
                .form-group textarea {
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(255,255,255,0.2);
                    padding: 12px 0;
                    color: var(--color-white);
                    font-family: var(--font-sans);
                    font-size: 1.1rem;
                    transition: border-color 0.3s;
                    border-radius: 0; /* Remove default border-radius */
                }

                .form-group input:focus, 
                .form-group select:focus, 
                .form-group textarea:focus {
                    outline: none;
                    border-bottom-color: var(--color-gold);
                }

                /* Custom Select Styling trick */
                .form-group select {
                    appearance: none;
                    cursor: pointer;
                }
                
                .form-group select option {
                    background-color: var(--color-black);
                }

                .submit-btn {
                    align-self: flex-start;
                    margin-top: 24px;
                    background: transparent;
                    border: 1px solid var(--color-gold);
                    color: var(--color-gold);
                    padding: 16px 40px;
                    font-family: var(--font-sans);
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    font-size: 0.9rem;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .submit-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--color-gold);
                    transform: translateX(-100%);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    z-index: -1;
                }

                .submit-btn:hover {
                    color: var(--color-black);
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px -10px rgba(212, 175, 55, 0.3);
                }

                .submit-btn:hover::before {
                    transform: translateX(0);
                }

                .map-section {
                    height: 50vh;
                    position: relative;
                    background: #111;
                    overflow: hidden;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }

                .map-bg {
                    width: 100%;
                    height: 100%;
                    background: url('/lanzante/assets/hero-bg.png') center/cover;
                    opacity: 0.2;
                    filter: grayscale(100%);
                }
                
                .map-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                }
                
                .map-overlay span {
                    background: var(--color-black);
                    padding: 16px 32px;
                    border: 1px solid var(--color-gold);
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                }

                .hover-gold {
                    color: inherit;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .hover-gold:hover {
                    color: var(--color-gold);
                }

                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;
