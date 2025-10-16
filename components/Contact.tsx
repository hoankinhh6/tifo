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
        <section id="lien-he" className="py-20 sm:py-24 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{content.title}</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        {content.subtitle}
                    </p>
                    
                    <div className="mt-12 bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden shadow-xl shadow-fuchsia-500/10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Hotline */}
                            <div className="p-8 text-center flex flex-col border-b md:border-b-0 md:border-r border-gray-700/50">
                                <div className="flex-grow">
                                    <div className="bg-gray-900/50 p-4 rounded-full border-2 border-fuchsia-500/30 mb-4 inline-block">
                                        <PhoneIcon />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{content.hotline.title}</h3>
                                    <p className="mt-2 text-gray-400">{content.hotline.description}</p>
                                </div>
                                <a href={`tel:${content.hotline.phone.replace(/\s/g, '')}`} className="mt-6 block text-2xl font-bold text-fuchsia-400 hover:text-fuchsia-300 transition-colors tracking-wider">
                                    {content.hotline.phone}
                                </a>
                            </div>

                            {/* Zalo */}
                            <div className="p-8 text-center flex flex-col">
                                <div className="flex-grow">
                                    <div className="bg-gray-900/50 p-4 rounded-full border-2 border-fuchsia-500/30 mb-4 inline-block">
                                        <ChatGroupIcon />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{content.zalo.title}</h3>
                                    <p className="mt-2 text-gray-400">{content.zalo.description}</p>
                                </div>
                                <a
                                    href={content.zalo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                                >
                                    Tham Gia Ngay
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
