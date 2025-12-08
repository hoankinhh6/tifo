import React from 'react';

interface FooterContent {
  copyright: string;
  facebookUrl: string;
  youtubeUrl: string;
}

const Footer: React.FC<{ content: FooterContent }> = ({ content }) => {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950/30 backdrop-blur-md pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

          {/* Brand Section */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tight text-white block mb-2">Tsoft</a>
            <p className="text-slate-400 text-sm max-w-xs">
              Giải pháp sản xuất video hàng loạt tự động hóa cho Content Creator.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href={content.facebookUrl} className="group p-3 rounded-full bg-slate-900 border border-slate-700/50 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all duration-300" aria-label="Facebook">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-fuchsia-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={content.youtubeUrl} target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full bg-slate-900 border border-slate-700/50 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300" aria-label="YouTube">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-red-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="#/admin" className="group p-3 rounded-full bg-slate-900 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300" aria-label="Admin Panel">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {content.copyright}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;