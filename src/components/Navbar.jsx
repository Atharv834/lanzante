import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import '../index.css';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled || location.pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <Logo className="navbar-logo" />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link to="/projects" className={`contact-btn ${location.pathname === '/projects' ? 'active' : ''}`}>Commissions</Link>
          <Link to="/95-59" className={`contact-btn ${location.pathname === '/95-59' ? 'active' : ''}`}>95-59</Link>
          <Link to="/historic-motorsport" className={`contact-btn ${location.pathname === '/historic-motorsport' ? 'active' : ''}`}>Historic</Link>
          <Link to="/history" className={`contact-btn ${location.pathname === '/history' ? 'active' : ''}`}>Heritage</Link>
          <Link to="/careers" className={`contact-btn ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
          <Link to="/contact" className={`contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <div className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-links">
              <Link to="/projects">Commissions</Link>
              <Link to="/95-59">95-59</Link>
              <Link to="/historic-motorsport">Historic</Link>
              <Link to="/history">Heritage</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact" className="mobile-contact">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 24px 0;
          z-index: 1000;
          transition: all 0.4s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 16px 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1002; /* Above overlay */
        }

        .navbar-logo {
          width: 140px;
          color: var(--color-white);
          transition: color 0.3s;
        }

        .navbar.scrolled .navbar-logo {
          color: var(--color-gold);
        }

        .nav-links {
          display: flex;
          gap: 16px;
        }

        .nav-links a {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-white-dim);
          position: relative;
          transition: all 0.3s;
          text-decoration: none;
        }

        .contact-btn {
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 8px 16px;
        }

        .contact-btn:hover, .contact-btn.active {
            border-color: var(--color-gold);
            background: rgba(212, 175, 55, 0.1);
            color: var(--color-white);
        }

        /* Mobile Menu */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          width: 30px;
          height: 20px;
          justify-content: center;
          z-index: 1002;
        }

        .mobile-menu-btn span {
          width: 100%;
          height: 2px;
          background: var(--color-white);
          transition: all 0.3s ease;
        }

        .mobile-menu-btn.open span:first-child {
            transform: rotate(45deg) translate(5px, 6px);
        }
        
        .mobile-menu-btn.open span:last-child {
            transform: rotate(-45deg) translate(5px, -6px);
        }

        .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: var(--color-black);
            z-index: 1001;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 80px;
        }

        .mobile-links {
            display: flex;
            flex-direction: column;
            gap: 32px;
            text-align: center;
        }

        .mobile-links a {
            font-family: var(--font-serif);
            font-size: 2rem;
            color: var(--color-white);
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: color 0.3s;
        }

        .mobile-links a:hover {
            color: var(--color-gold);
        }

        .mobile-links .mobile-contact {
            color: var(--color-gold);
            font-family: var(--font-sans);
            font-size: 1.2rem;
            border: 1px solid var(--color-gold);
            padding: 12px 32px;
            display: inline-block;
            margin-top: 16px;
        }

        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
