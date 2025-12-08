import React from 'react';

interface VideoSectionContent {
  title: string;
  subtitle: string;
  videoTitle: string;
  videoUrl: string;
}

const VideoSection: React.FC<{ content: VideoSectionContent }> = ({ content }) => {
  return (
    <section id="huong-dan" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            {content.title}
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-fuchsia-600/20 to-cyan-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
              {/* Window Bar */}
              <div className="h-10 bg-slate-800/90 backdrop-blur border-b border-slate-700/50 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono tracking-wide">{content.videoTitle}</div>
                <div className="w-16"></div> {/* Spacer for center alignment */}
              </div>

              <div
                className="relative bg-black"
                style={{ paddingTop: '56.25%' }} // 16:9 Aspect Ratio
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={content.videoUrl}
                  title="vimeo-player"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
