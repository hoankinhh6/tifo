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
          animation: text-gradient-animation 4s linear infinite;
        }
        @keyframes text-gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Dynamic Background Element */}
        <div
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-[11px] font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
            </span>
            New Version Released
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto">
            {content.titleLine1} {' '}
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-text-gradient inline-block">
              {content.titleLine2}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
            {content.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <a
                href="#download"
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl shadow-fuchsia-500/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                {content.ctaButton1}
              </a>
              <a
                href="#features"
                className="bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                {content.ctaButton2}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
            <p className="text-sm text-slate-400 font-medium">
              {content.trialInfo}
            </p>
          </div>

          {/* Video Container with Window Effect */}
          <div className="mt-16 max-w-5xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-fuchsia-500/30 to-purple-600/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl">
              {/* Window Title Bar */}
              <div className="h-8 bg-slate-800/80 backdrop-blur flex items-center px-4 gap-2 border-b border-slate-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-[10px] text-slate-400 font-mono">veo3-editor-preview.mp4</div>
              </div>

              <div
                className="relative bg-black"
                style={{ paddingTop: '56.25%' }} // 16:9 Aspect Ratio
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={content.videoUrl}
                  title="Giới thiệu Tsoft"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
