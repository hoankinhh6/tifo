import React from 'react';
import { PhoneIcon, ChatGroupIcon } from './icons/MiscIcons';

interface ContactContent {
    title: string;
    subtitle: string;
    hotline: {
        title: string;
        description: string;
        phone: string;
    },
    zalo: {
        title: string;
        description: string;
        link: string;
    }
}

const Contact: React.FC<{ content: ContactContent }> = ({ content }) => {
    return (
        <section id="lien-he" className="py-24 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[100px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 animate-on-scroll">{content.title}</h2>
                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Hotline Card */}
                    <div className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 text-center hover:border-fuchsia-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/10 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <div className="relative z-10">
                            <div className="w-20 h-20 mx-auto bg-slate-800/80 rounded-2xl border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <div className="text-fuchsia-400">
                                    <PhoneIcon />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-50 mb-2">{content.hotline.title}</h3>
                            <p className="text-slate-400 mb-8">{content.hotline.description}</p>

                            <a href={`tel:${content.hotline.phone.replace(/\s/g, '')}`} className="inline-block text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 hover:to-white transition-all">
                                {content.hotline.phone}
                            </a>
                        </div>
                    </div>

                    {/* Zalo Card */}
                    <div className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 text-center hover:border-fuchsia-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/10 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <div className="relative z-10">
                            <div className="w-20 h-20 mx-auto bg-slate-800/80 rounded-2xl border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <div className="text-blue-400">
                                    <ChatGroupIcon />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-50 mb-2">{content.zalo.title}</h3>
                            <p className="text-slate-400 mb-8">{content.zalo.description}</p>

                            <a
                                href={content.zalo.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                            >
                                Chat Zalo Ngay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
