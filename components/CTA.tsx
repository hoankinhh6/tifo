import React from 'react';

interface CTAContent {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CTA: React.FC<{ content: CTAContent }> = ({ content }) => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-t-white/10 border-b-fuchsia-600/50 shadow-2xl shadow-fuchsia-900/50">

          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/50 via-purple-900/30 to-slate-900"></div>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-fuchsia-600/30 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-cyan-600/20 blur-[120px] rounded-full"></div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-200 mb-12 font-light">
              {content.subtitle}
            </p>
            <div className="flex justify-center">
              <a
                href="#download"
                className="group relative inline-flex items-center gap-3 bg-white text-fuchsia-950 font-black py-5 px-12 rounded-full text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">{content.buttonText}</span>
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-400 opacity-80">
              Không cần thẻ tín dụng • Cài đặt miễn phí • Hỗ trợ 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
