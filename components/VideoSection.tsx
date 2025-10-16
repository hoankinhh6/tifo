import React from 'react';

interface VideoSectionContent {
    title: string;
    subtitle: string;
    videoTitle: string;
    videoUrl: string;
}

const VideoSection: React.FC<{ content: VideoSectionContent }> = ({ content }) => {
  return (
    <section id="huong-dan" className="py-20 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-400">
            {content.subtitle}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 text-center sm:text-left">{content.videoTitle}</h3>
            <div 
              className="relative rounded-lg overflow-hidden border-2 border-fuchsia-500/50 shadow-2xl shadow-fuchsia-500/20"
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
    </section>
  );
};

export default VideoSection;
