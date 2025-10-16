import React from 'react';

const TestimonialCard: React.FC<{ quote: string; author: string; title: string; avatar: string; }> = ({ quote, author, title, avatar }) => (
  <figure className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-fuchsia-500/50 hover:bg-gray-800 hover:-translate-y-1 h-full flex flex-col">
    <blockquote className="text-gray-300 flex-grow">
      <p>“{quote}”</p>
    </blockquote>
    <figcaption className="mt-4 flex items-center space-x-4">
      <img className="w-12 h-12 rounded-full" src={avatar} alt={author} />
      <div>
        <div className="font-semibold text-white">{author}</div>
        <div className="text-gray-400 text-sm">{title}</div>
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
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{content.title}</h2>
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
