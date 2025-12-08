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
      className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-fuchsia-500/50 hover:bg-slate-800/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fuchsia-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      <div className="relative w-20 h-20 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-fuchsia-500/30 shadow-lg">
        {/* Clone icon with larger size/color props if possible, or wrap div */}
        <div className="text-slate-200 group-hover:text-white transition-colors transform scale-125">
          {icon}
        </div>
      </div>

      <span className="relative text-xl font-bold text-slate-100 group-hover:text-fuchsia-400 transition-colors">
        Tải cho {os}
      </span>

      <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        <span>Tải xuống ngay</span>
      </div>
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
    <section id="download" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            Safe & Secure Download
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">{content.title}</h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
            {content.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {content.downloads.map((download) => (
            <DownloadButton key={download.os} {...download} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#lien-he"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-800/80 border border-fuchsia-500/50 text-fuchsia-300 hover:bg-fuchsia-600 hover:text-white hover:border-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300 group backdrop-blur-sm"
          >
            <span className="text-lg font-bold tracking-wide">Bạn cần hỗ trợ kích hoạt? Liên hệ ngay</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
