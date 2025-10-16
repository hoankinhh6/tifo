import React, { useState } from 'react';

interface HeaderContent {
  navLinks: { name: string; href: string }[];
}

const Header: React.FC<{ content: HeaderContent }> = ({ content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navLinks } = content;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/50 border-b border-gray-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <svg className="w-8 h-8 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          <a href="#" className="text-xl font-bold text-white">Tsoft<span className="hidden lg:inline"> - Tool sản xuất veo3 hàng loạt</span></a>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors font-medium">
              {link.name}
            </a>
          ))}
           <a
            href="#download"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Bắt đầu ngay
          </a>
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div className="md:hidden bg-gray-900/90 backdrop-blur-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
             <a
              href="#download"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 mt-2"
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
