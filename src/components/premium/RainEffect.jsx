import { useEffect, useRef } from 'react';

const RainEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setSize();
        window.addEventListener('resize', setSize);

        const drops = [];
        const dropCount = 100;

        class Drop {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = Math.random() * 20 + 5; // Depth
                this.length = Math.random() * 20 + 10;
                this.speed = Math.random() * 10 + 15;
            }

            fall() {
                this.y += this.speed;
                if (this.y > canvas.height) {
                    this.y = -this.length;
                    this.x = Math.random() * canvas.width;
                }
                this.draw();
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + this.length);
                ctx.strokeStyle = `rgba(174, 194, 224, ${0.1 + (1 / this.z)})`; // Blue-ish rain tint
                ctx.lineWidth = 1;
                ctx.lineCap = 'round';
                ctx.stroke();
            }
        }

        for (let i = 0; i < dropCount; i++) {
            drops.push(new Drop());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drops.forEach(drop => drop.fall());
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="rain-canvas"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 2,
                mixBlendMode: 'screen'
            }}
        />
    );
};

export default RainEffect;
