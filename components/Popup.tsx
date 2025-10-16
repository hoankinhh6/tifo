import React from 'react';
import { GiftIcon } from './icons/MiscIcons';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    title: string;
    description: string;
    buttonText: string;
  }
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-gray-800 rounded-2xl p-8 max-w-lg w-full relative border border-fuchsia-500/50 shadow-2xl shadow-fuchsia-500/20 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Đóng"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fuchsia-600/20 border-2 border-fuchsia-500/50">
                <GiftIcon />
            </div>
            <h2 className="text-2xl font-extrabold text-white mb-3">{content.title}</h2>
            <p className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: content.description }}></p>
            <a
                href="#lien-he"
                onClick={onClose}
                className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
            >
                {content.buttonText}
            </a>
        </div>
      </div>
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Popup;
