import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextReveal = ({ children, className }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.6"]
    });

    const words = children.split(" ");

    return (
        <p ref={element} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4em' }}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

                return (
                    <motion.span key={i} style={{ opacity }}>
                        {word}
                    </motion.span>
                );
            })}
        </p>
    );
};

export default TextReveal;
