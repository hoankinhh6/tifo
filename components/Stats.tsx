import React, { useState, useEffect, useRef } from 'react';

// Icons for the stats section
const ShoppingCartIcon = () => (
    <svg className="w-8 h-8 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const VideoPlayIcon = () => (
    <svg className="w-8 h-8 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const HeartIcon = () => (
    <svg className="w-8 h-8 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const statIcons: { [key: string]: React.ReactNode } = {
    "Đơn hàng được bán ra": <ShoppingCartIcon />,
    "Video được tạo": <VideoPlayIcon />,
    "Khách hàng hài lòng về support": <HeartIcon />,
};


const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string; startAnimation: boolean; }> = ({ icon, value, label, startAnimation }) => {
    const [count, setCount] = useState(0);

    const finalValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');
    const isFloat = value.includes('.');

    useEffect(() => {
        if (!startAnimation) return;

        let startTime: number | null = null;
        const duration = 2000; // 2-second animation

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentVal = progress * finalValue;

            if (isFloat) {
                setCount(parseFloat(currentVal.toFixed(1)));
            } else {
                setCount(Math.floor(currentVal));
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(finalValue);
            }
        };

        requestAnimationFrame(animate);

    }, [startAnimation, finalValue, isFloat]);

    return (
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 text-center transition-all duration-300 hover:border-fuchsia-500/50 hover:bg-gray-800 hover:-translate-y-1">
            <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-gray-900/50 border-2 border-fuchsia-500/30 mb-4">
                {icon}
            </div>
            <p className="text-4xl font-extrabold text-white tracking-tight">{count}{suffix}</p>
            <p className="mt-2 text-gray-400">{label}</p>
        </div>
    );
};

interface StatsContent {
    title: string;
    subtitle: string;
    statCards: {
        value: string;
        label: string;
    }[];
    testimonial: string;
}

const Stats: React.FC<{ content: StatsContent }> = ({ content }) => {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Animate only once
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the element is visible
            }
        );
        
        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);


    return (
        <section ref={statsRef} className="py-20 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{content.title}</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {content.statCards.map((stat, index) => (
                        <StatCard key={index} {...stat} icon={statIcons[stat.label] || <ShoppingCartIcon />} startAnimation={isVisible} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: content.testimonial }}></p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
