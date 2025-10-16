import React from 'react';
import { WindowsIcon, AppleIcon } from './icons/OSIcons';

const iconMap: { [key: string]: React.ReactNode } = {
  "windows": <WindowsIcon />,
  "macos (apple silicon)": <AppleIcon />,
  "macos (intel)": <AppleIcon />,
};

const DownloadButton: React.FC<{ href: string; os: string; }> = ({ href, os }) => {
    const icon = iconMap[os.toLowerCase()] || <WindowsIcon />;
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800 hover:border-fuchsia-500/50 hover:-translate-y-1"
      >
        {icon}
        <span className="mt-4 text-lg font-semibold text-white">Tải cho {os}</span>
      </a>
    );
};

interface DownloadContent {
    title: string;
    subtitle: string;
    downloads: {
      href: string;
      os: string;
    }[];
}

const Download: React.FC<{ content: DownloadContent }> = ({ content }) => {
  return (
    <section id="download" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-400">
            {content.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {content.downloads.map((download) => (
            <DownloadButton key={download.os} {...download} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Download;
