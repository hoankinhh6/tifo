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
  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-fuchsia-500/50 hover:bg-gray-800 hover:-translate-y-1">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-fuchsia-600 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
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
    <section id="features" className="py-20 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-400">
            {content.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.featureCards.map((feature, index) => (
            <FeatureCard key={index} {...feature} icon={featureIcons[feature.title] || <InfinityIcon />} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
