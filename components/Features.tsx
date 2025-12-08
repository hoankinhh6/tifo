import React from 'react';
import { InfinityIcon, TextToVideoIcon, FeatherIcon, DownloadStitchIcon } from './icons/FeatureIcons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featureIcons: { [key: string]: React.ReactNode } = {
  'Sáng Tạo Không Giới Hạn': <InfinityIcon />,
  'Text & Image to Video': <TextToVideoIcon />,
  'Phần Mềm Siêu Nhẹ': <FeatherIcon />,
  'Tự Động Tải & Ghép Nối': <DownloadStitchIcon />,
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group relative bg-slate-900/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/50 transition-all duration-300 hover:border-fuchsia-500/50 hover:bg-slate-800/60 hover:-translate-y-2 overflow-hidden">
    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-fuchsia-600/10 blur-3xl group-hover:scale-150 transition-transform duration-500"></div>

    <div className="relative inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white shadow-lg shadow-fuchsia-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>

    <h3 className="relative text-xl font-bold text-slate-50 mb-3 group-hover:text-fuchsia-400 transition-colors">{title}</h3>
    <p className="relative text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{description}</p>
  </div>
);

interface FeaturesContent {
  title: string;
  subtitle: string;
  featureCards: {
    title: string;
    description: string;
  }[];
}

const Features: React.FC<{ content: FeaturesContent }> = ({ content }) => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 animate-on-scroll">
            {content.title}
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {content.featureCards.map((feature, index) => (
            <FeatureCard key={index} {...feature} icon={featureIcons[feature.title] || <InfinityIcon />} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
