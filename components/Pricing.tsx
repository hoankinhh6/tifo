import React, { useState } from 'react';

const CheckIcon = () => (
  <svg className="h-5 w-5 text-fuchsia-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = () => (
  <svg className="h-5 w-5 text-yellow-400 flex-shrink-0 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

interface Plan {
  plan: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  popular?: boolean;
  promotion?: string;
}

interface PricingContent {
  title: string;
  subtitle: string;
  plans: Plan[];
  policy: {
    title: string;
    trialTitle: string;
    trialDescription: string;
    refundTitle: string;
    refundDescription: string;
  };
  purchaseModal: {
    title: string;
    subtitle: string;
    supportContacts: {
      name: string;
      phone: string;
    }[];
  };
  specialOffer?: string;
  additionalOption?: string;
}

const PricingCard: React.FC<{ planData: Plan, onPurchaseClick: () => void }> = ({ planData, onPurchaseClick }) => {
  const isPopular = planData.popular;

  return (
    <div className={`relative flex flex-col h-full rounded-2xl transition-all duration-300 ${isPopular
      ? 'bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-fuchsia-500 shadow-[0_0_40px_rgba(192,38,211,0.2)] transform sm:-translate-y-4'
      : 'bg-gray-800/40 border border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600'
      }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
          PHỔ BIẾN NHẤT
        </div>
      )}

      <div className="p-8 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-gray-100'}`}>{planData.plan}</h3>
        <p className="mt-2 text-sm text-gray-400 min-h-[40px] leading-relaxed">{planData.description}</p>

        <div className="mt-6 flex items-baseline">
          <span className="text-4xl font-extrabold text-white tracking-tight">{planData.price}</span>
          <span className="ml-2 text-sm font-medium text-gray-400">{planData.priceSuffix}</span>
        </div>

        <div className="mt-8 mb-8 h-px bg-gray-700/50" />

        <ul className="space-y-4 flex-grow">
          {planData.features.map((feature, index) => {
            // Check if this is the exclusive feature to highlight
            const isExclusive = feature.includes("Clone video đối thủ") || feature.toLowerCase().includes("độc quyền");

            return (
              <li key={index} className="flex items-start">
                {isExclusive ? <StarIcon /> : <CheckIcon />}
                <span className={`ml-3 text-sm leading-6 ${isExclusive ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`}>
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>

        <button
          onClick={onPurchaseClick}
          className={`mt-8 w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 shadow-lg ${isPopular
            ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white hover:shadow-fuchsia-500/25'
            : 'bg-gray-700 hover:bg-gray-600 text-white hover:shadow-lg'
            }`}
        >
          ĐẶT MUA NGAY
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC<{ content: PricingContent }> = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, subtitle, plans, policy, purchaseModal, specialOffer, additionalOption } = content;

  return (
    <section id="bang-gia" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
            </span>
            NEW BẢNG GIÁ MỚI
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="mb-16">
          {additionalOption && (
            <div className="max-w-4xl mx-auto px-4">
              <div className="relative group">
                {/* Animated Gradient Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-fuchsia-500 to-red-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                {/* Main Content Box */}
                <div className="relative bg-gray-900 rounded-xl p-4 sm:p-5 flex items-center justify-center text-center shadow-xl">
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <div
                      className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium"
                      dangerouslySetInnerHTML={{ __html: additionalOption }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map(p => <PricingCard key={p.plan} planData={p} onPurchaseClick={() => setIsModalOpen(true)} />)}
        </div>

        {/* Policy Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">{policy.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{policy.trialTitle}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{policy.trialDescription}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500/10 rounded-xl flex items-center justify-center text-fuchsia-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{policy.refundTitle}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{policy.refundDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-gray-900 rounded-2xl p-8 max-w-md w-full relative border border-gray-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              aria-label="Đóng"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">{purchaseModal.title}</h2>
              <p className="text-gray-400 text-sm">{purchaseModal.subtitle}</p>
            </div>
            <div className="space-y-3">
              {purchaseModal.supportContacts.map(contact => (
                <div key={contact.name} className="bg-gray-800/50 p-4 rounded-xl flex items-center justify-between group hover:bg-gray-800 transition-colors border border-transparent hover:border-fuchsia-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      Z
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{contact.name}</p>
                      <p className="text-xs text-gray-400">{contact.phone}</p>
                    </div>
                  </div>
                  <a
                    href={`https://zalo.me/${contact.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    Chat Zalo
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
