import React, { useState, useEffect } from 'react';

interface HeroContent {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaButton1: string;
  ctaButton2: string;
  trialInfo: string;
  videoUrl: string;
}

const Hero: React.FC<{ content: HeroContent }> = ({ content }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-gradient-animation 3s linear infinite;
        }
        @keyframes text-gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"
        />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            {content.titleLine1}
            <span className="block bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mt-2 animate-text-gradient">
              {content.titleLine2}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            {content.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex justify-center gap-4">
              <a
                href="#download"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              >
                {content.ctaButton1}
              </a>
              <a
                href="#features"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
              >
                {content.ctaButton2}
              </a>
            </div>
            <p className="text-sm text-gray-400">
              {content.trialInfo}
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div 
              className="relative rounded-lg overflow-hidden border-2 border-fuchsia-500/50 shadow-2xl shadow-fuchsia-500/20"
              style={{ paddingTop: '56.25%' }} // 16:9 Aspect Ratio
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={content.videoUrl}
                title="Giới thiệu Tsoft - Tool tạo video hàng loạt"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
