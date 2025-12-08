import React, { useState, useEffect } from 'react';

interface HeaderContent {
  navLinks: { name: string; href: string }[];
}

const Header: React.FC<{ content: HeaderContent }> = ({ content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { navLinks } = content;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
        ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-slate-800/50 shadow-lg shadow-fuchsia-900/10'
        : 'py-5 bg-transparent border-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-2 bg-fuchsia-600/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="/logo_circle.png" alt="Tsoft Logo" className="relative w-11 h-11 rounded-full shadow-lg shadow-fuchsia-500/20 group-hover:scale-105 transition-transform duration-300" />
          </div>
          <a href="#" className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-none group-hover:text-fuchsia-100 transition-colors">Tsoft</span>
            <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 uppercase tracking-wider leading-none mt-1 hidden sm:block">Video Automation Tool</span>
          </a>
        </div>

        {/* Desktop Nav with Moving Border */}
        <div className="hidden md:flex relative p-[2px] rounded-full overflow-hidden group">
          <style>{`
            @keyframes beam-slide {
              0% { transform: translateX(-200%); }
              100% { transform: translateX(200%); }
            }
          `}</style>

          {/* Base Border Color */}
          <div className="absolute inset-0 bg-slate-800/50 rounded-full" />

          {/* Moving Gradient Beam */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-80 blur-sm"
            style={{
              width: '50%',
              animation: 'beam-slide 3s linear infinite'
            }}
          />

          {/* Nav Container */}
          <nav className="relative flex items-center gap-1 bg-slate-950/90 rounded-full p-1 backdrop-blur-3xl border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pl-2">
              <a
                href="#download"
                className="bg-white text-slate-950 hover:bg-slate-100 font-bold py-2.5 px-6 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Bắt đầu ngay
              </a>
            </div>
          </nav>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-300 hover:text-white transition-colors relative"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-slate-300 hover:text-white font-medium text-lg px-4 py-3 hover:bg-slate-800/50 rounded-xl transition-colors border-l-2 border-transparent hover:border-fuchsia-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#download"
            className="block mt-6 bg-white text-slate-950 font-bold py-4 px-6 rounded-xl text-center shadow-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Bắt đầu ngay
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
