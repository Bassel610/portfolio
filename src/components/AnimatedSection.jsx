import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

function AnimatedSection({ children, animation = 'fadeInUp', delay = 0, ...props }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay]);

    const getAnimationStyles = () => {
        const baseStyles = {
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        };

        if (!isVisible) {
            switch (animation) {
                case 'fadeInUp':
                    return {
                        ...baseStyles,
                        opacity: 0,
                        transform: 'translateY(40px)',
                    };
                case 'fadeInLeft':
                    return {
                        ...baseStyles,
                        opacity: 0,
                        transform: 'translateX(-40px)',
                    };
                case 'fadeInRight':
                    return {
                        ...baseStyles,
                        opacity: 0,
                        transform: 'translateX(40px)',
                    };
                case 'fadeIn':
                    return {
                        ...baseStyles,
                        opacity: 0,
                    };
                case 'scaleIn':
                    return {
                        ...baseStyles,
                        opacity: 0,
                        transform: 'scale(0.8)',
                    };
                default:
                    return {
                        ...baseStyles,
                        opacity: 0,
                        transform: 'translateY(40px)',
                    };
            }
        }

        return {
            ...baseStyles,
            opacity: 1,
            transform: 'translateY(0) translateX(0) scale(1)',
        };
    };

    return (
        <Box
            ref={ref}
            sx={{
                ...getAnimationStyles(),
                ...props.sx
            }}
            {...props}
        >
            {children}
        </Box>
    );
}

export default AnimatedSection;
