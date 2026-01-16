const Logo = ({ className }) => {
    return (
        <svg viewBox="0 0 200 40" className={className} xmlns="http://www.w3.org/2000/svg" width="160" height="32">
            <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="'Trajan Pro', 'Cinzel', serif"
                fontSize="24"
                letterSpacing="0.35em"
                fill="currentColor"
                fontWeight="500"
            >
                LANZANTE
            </text>
        </svg>
    );
};

export default Logo;
