import React from 'react';

const TestimonialCard: React.FC<{ quote: string; author: string; title: string; avatar: string; }> = ({ quote, author, title, avatar }) => (
  <figure className="h-full flex flex-col bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-300 hover:border-fuchsia-500/30 hover:bg-slate-800/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-fuchsia-500/5">
    <div className="mb-6 text-fuchsia-500">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.2936 14.9255 13.9264C15.53 12.5592 16.5966 11.232 18.1251 9.944L17.2286 8.056C15.008 9.536 13.6262 11.6664 12.9824 14.4456L14.017 21ZM5 21L5 18C5 16.896 5.304 15.2936 5.90851 13.9264C6.51302 12.5592 7.57962 11.232 9.10812 9.944L8.21163 8.056C5.99104 9.536 4.60922 11.6664 3.96541 14.4456L5 21Z" />
      </svg>
    </div>
    <blockquote className="flex-grow">
      <p className="text-slate-300 italic text-lg leading-relaxed font-light">"{quote}"</p>
    </blockquote>
    <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-700/50">
      <div className="relative">
        <div className="absolute inset-0 bg-fuchsia-500 rounded-full blur opacity-20"></div>
        <img className="relative w-12 h-12 rounded-full border border-fuchsia-500/30 object-cover" src={avatar} alt={author} />
      </div>
      <div>
        <div className="font-bold text-slate-50">{author}</div>
        <div className="text-fuchsia-400 text-sm font-medium">{title}</div>
      </div>
    </figcaption>
  </figure>
);

interface TestimonialsContent {
  title: string;
  testimonialCards: {
    quote: string;
    author: string;
    title: string;
    avatar: string;
  }[];
}

const Testimonials: React.FC<{ content: TestimonialsContent }> = ({ content }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">{content.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.testimonialCards.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
