import React from 'react';

const VideoEmbed: React.FC<{ src: string; title: string }> = ({ src, title }) => (
  <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/10 hover:-translate-y-1">
    <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-4 bg-slate-900/80 border-t border-slate-700/50">
      <h4 className="text-sm sm:text-base font-medium text-slate-300 group-hover:text-white transition-colors line-clamp-1">{title}</h4>
    </div>
  </div>
);

interface VideoLibraryContent {
  title: string;
  subtitle: string;
  videos: {
    src: string;
    title: string;
  }[];
}

const VideoLibrary: React.FC<{ content: VideoLibraryContent }> = ({ content }) => {
  return (
    <section id="video-library" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">{content.title}</h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
            {content.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {content.videos.map((video, index) => (
            <VideoEmbed key={index} src={video.src} title={video.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoLibrary;
