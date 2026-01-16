import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../../index.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="cursor-dot"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            />
            {/* Trailing Ring */}
            <motion.div
                className="cursor-ring"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: hovered ? 1.5 : 1,
                    borderColor: hovered ? 'rgba(212, 175, 55, 0.8)' : 'rgba(255, 255, 255, 0.3)'
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 1 }}
            />

            <style>{`
         .cursor-dot {
            position: fixed;
            top: 0;
            left: 0;
            width: 8px;
            height: 8px;
            background-color: var(--color-gold);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
         }
         
         .cursor-ring {
            position: fixed;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
         }
         
         @media (max-width: 1024px) {
            .cursor-dot, .cursor-ring {
                display: none;
            }
         }
         
         /* Hide default cursor only on desktop to allow generic styling */
         @media (min-width: 1025px) {
             body {
                 cursor: none;
             }
             a, button, input, select, textarea {
                 cursor: none;
             }
         }
       `}</style>
        </>
    );
};

export default CustomCursor;
