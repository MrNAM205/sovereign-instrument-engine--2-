import React from 'react';

interface EndorsementModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  isLoading: boolean;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-700"></div>
    </div>
);

const renderContentWithLinks = (text: string) => {
    if (!text) return null;
    
    // Regex to find UCC sections like [UCC §3-205]
    const regex = /(\[UCC §\d-\d{3}\])/g;
    const parts = text.split(regex);
  
    return parts.map((part, index) => {
      const match = part.match(/\[UCC §(\d-\d{3})\]/);
      if (match) {
        const section = match[1]; // e.g., "3-205"
        const article = section.split('-')[0];
        const url = `https://www.law.cornell.edu/ucc/${article}/${section}`;
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline bg-blue-50 px-1 py-0.5 rounded transition-colors"
          >
            {`UCC §${section}`}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
};


const EndorsementModal: React.FC<EndorsementModalProps> = ({ isOpen, onClose, title, content, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="endorsement-modal-title"
    >
      <div 
        className="bg-[#F9F5EC] rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 relative transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 id="endorsement-modal-title" className="text-2xl font-bold text-[#1E2A3A] mb-4">{title}</h2>
        <div className="text-lg text-slate-700 leading-relaxed">
          {isLoading ? <LoadingSpinner /> : <div style={{ whiteSpace: 'pre-wrap' }}>{renderContentWithLinks(content)}</div>}
        </div>
      </div>
    </div>
  );
};

export default EndorsementModal;