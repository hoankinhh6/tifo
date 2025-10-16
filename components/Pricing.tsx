import React, { useState } from 'react';

const CheckIcon = () => (
  <svg className="h-6 w-6 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

interface Plan {
    plan: string;
    price: string;
    priceSuffix: string;
    description: string;
    features: string[];
    popular?: boolean;
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
}

const PricingCard: React.FC<{ planData: Plan, onPurchaseClick: () => void }> = ({ planData, onPurchaseClick }) => (
  <div className={`relative bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 flex flex-col ${planData.popular ? 'border-fuchsia-500 transform scale-105' : 'hover:-translate-y-1 transition-transform'}`}>
    {planData.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Phổ biến nhất</div>}
    <h3 className="text-2xl font-bold text-white">{planData.plan}</h3>
    <p className="mt-2 text-gray-400 h-12">{planData.description}</p>
    <div className="mt-6 flex justify-center items-baseline">
      <span className="text-4xl font-extrabold text-white">{planData.price}</span>
      <span className="ml-1 text-base font-medium text-gray-400">{planData.priceSuffix}</span>
    </div>
    <ul className="mt-6 space-y-4 flex-grow">
      {planData.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon />
          <span className="ml-3 text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <button onClick={onPurchaseClick} className={`mt-8 block w-full py-3 px-6 text-center rounded-lg font-semibold transition-colors duration-300 ${planData.popular ? 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
      Đặt mua
    </button>
  </div>
);

const Pricing: React.FC<{ content: PricingContent }> = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, subtitle, plans, policy, purchaseModal } = content;

  return (
    <section id="bang-gia" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
          <p className="mt-4 text-lg text-gray-400">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map(p => <PricingCard key={p.plan} planData={p} onPurchaseClick={() => setIsModalOpen(true)} />)}
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center bg-gray-800/50 border border-gray-700/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white">{policy.title}</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                    <h4 className="text-lg font-semibold text-fuchsia-400">{policy.trialTitle}</h4>
                    <p className="mt-2 text-gray-300">{policy.trialDescription}</p>
                </div>
                <div className="text-left">
                    <h4 className="text-lg font-semibold text-fuchsia-400">{policy.refundTitle}</h4>
                    <p className="mt-2 text-gray-300">{policy.refundDescription}</p>
                </div>
            </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-gray-800 rounded-lg p-8 max-w-md w-full relative border border-gray-700 shadow-xl shadow-fuchsia-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Đóng"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h2 className="text-2xl font-bold text-white mb-4 text-center">{purchaseModal.title}</h2>
            <p className="text-gray-400 mb-6 text-center">{purchaseModal.subtitle}</p>
            <div className="space-y-4">
              {purchaseModal.supportContacts.map(contact => (
                <div key={contact.name} className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">
                      Zalo {contact.name}: <span className="font-normal text-gray-300 tracking-wider">{contact.phone}</span>
                    </p>
                  </div>
                  <a 
                    href={`https://zalo.me/${contact.phone}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 whitespace-nowrap"
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
