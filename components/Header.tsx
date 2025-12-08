import React, { useState } from 'react';

interface HeaderContent {
  navLinks: { name: string; href: string }[];
}

const Header: React.FC<{ content: HeaderContent }> = ({ content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navLinks } = content;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b border-white/5 ${window.scrollY > 10 ? 'bg-slate-950/80 shadow-2xl shadow-fuchsia-900/5' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-pink-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <a href="#" className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-none">Tsoft</span>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider leading-none mt-1 hidden sm:block">Video Automation Tool</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#download"
            className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold py-2.5 px-6 rounded-full shadow-lg shadow-fuchsia-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Bắt đầu ngay
          </a>
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white font-medium text-lg px-4 py-2 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#download"
              className="mt-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-3 px-6 rounded-xl text-center shadow-lg shadow-fuchsia-500/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Bắt đầu ngay
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
