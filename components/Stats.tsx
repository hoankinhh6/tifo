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
        const duration = 2000;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentVal = easeProgress * finalValue;

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
        <div className="relative group bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 text-center transition-all duration-500 hover:border-fuchsia-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fuchsia-500/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-fuchsia-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center h-16 w-16 mx-auto rounded-2xl bg-gradient-to-tr from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-500/20 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-fuchsia-500/10">
                {icon}
            </div>
            <p className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight group-hover:to-white transition-all duration-300">{count}{suffix}</p>
            <p className="mt-3 text-slate-400 font-medium group-hover:text-fuchsia-300 transition-colors uppercase tracking-wider text-sm">{label}</p>
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
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = statsRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);


    return (
        <section ref={statsRef} className="py-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">{content.title}</h2>
                    <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {content.statCards.map((stat, index) => (
                        <StatCard key={index} {...stat} icon={statIcons[stat.label] || <ShoppingCartIcon />} startAnimation={isVisible} />
                    ))}
                </div>

                <div className="mt-20 text-center max-w-4xl mx-auto relative">
                    <svg className="absolute left-0 -top-8 w-16 h-16 text-fuchsia-600/20 -z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.2936 14.9255 13.9264C15.53 12.5592 16.5966 11.232 18.1251 9.944L17.2286 8.056C15.008 9.536 13.6262 11.6664 12.9824 14.4456L14.017 21ZM5 21L5 18C5 16.896 5.304 15.2936 5.90851 13.9264C6.51302 12.5592 7.57962 11.232 9.10812 9.944L8.21163 8.056C5.99104 9.536 4.60922 11.6664 3.96541 14.4456L5 21Z" /></svg>
                    <p className="text-xl sm:text-2xl md:text-3xl font-light text-slate-300 italic leading-relaxed" dangerouslySetInnerHTML={{ __html: content.testimonial }}></p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <div className="h-1 w-12 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
