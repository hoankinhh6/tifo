import React from 'react';

interface CTAContent {
    title: string;
    subtitle: string;
    buttonText: string;
}

const CTA: React.FC<{ content: CTAContent }> = ({ content }) => {
  return (
    <section id="cta" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="bg-gray-800 rounded-2xl p-10 md:p-16 text-center shadow-2xl shadow-fuchsia-500/10 relative overflow-hidden border border-gray-700">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-fuchsia-600/20 via-transparent to-cyan-600/20 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {content.title}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-gray-300">
              {content.subtitle}
            </p>
            <div className="mt-8">
              <a
                href="#download"
                className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              >
                {content.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
