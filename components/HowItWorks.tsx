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
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-400">
            {content.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-700/50"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {content.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block">
                  <div className="w-20 h-20 mx-auto bg-gray-800 border-2 border-fuchsia-500 rounded-full flex items-center justify-center">
                    {stepIcons[step.title] || <IdeaIcon />}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
