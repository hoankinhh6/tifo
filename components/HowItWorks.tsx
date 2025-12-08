import React from 'react';
import { IdeaIcon, UploadIcon, VideoIcon } from './icons/MiscIcons';

const stepIcons: { [key: string]: React.ReactNode } = {
  'Tạo Kịch Bản & Prompt': <IdeaIcon />,
  'Tải Prompt Lên Tool': <UploadIcon />,
  'Chờ & Nhận Nguyên Liệu': <VideoIcon />,
};

interface HowItWorksContent {
  title: string;
  subtitle: string;
  steps: {
    title: string;
    description: string;
  }[];
}

const HowItWorks: React.FC<{ content: HowItWorksContent }> = ({ content }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">{content.title}</h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent shadow-[0_0_10px_rgba(192,38,211,0.5)]"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
            {content.steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative inline-block z-10">
                  <div className="absolute inset-0 bg-fuchsia-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="w-24 h-24 mx-auto bg-slate-900/80 backdrop-blur-xl border-2 border-fuchsia-500/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(192,38,211,0.2)] group-hover:scale-110 group-hover:border-fuchsia-400 transition-all duration-300">
                    <div className="text-fuchsia-400 group-hover:text-white transition-colors duration-300 transform scale-110">
                      {stepIcons[step.title] || <IdeaIcon />}
                    </div>
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <h3 className="mt-8 text-xl sm:text-2xl font-bold text-slate-50 group-hover:text-fuchsia-400 transition-colors">{step.title}</h3>
                <p className="mt-4 text-slate-400 leading-relaxed max-w-xs mx-auto text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
