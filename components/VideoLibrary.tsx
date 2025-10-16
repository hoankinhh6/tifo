import React from 'react';

const VideoEmbed: React.FC<{ src: string; title: string }> = ({ src, title }) => (
  <div
    className="relative rounded-lg overflow-hidden border-2 border-fuchsia-500/50 shadow-lg shadow-fuchsia-500/10"
    style={{ paddingTop: '56.25%' }} // 16:9 Aspect Ratio
  >
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
    <section id="video-library" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-400">
            {content.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.videos.map((video, index) => (
            <VideoEmbed key={index} src={video.src} title={video.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoLibrary;
