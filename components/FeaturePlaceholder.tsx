import React from 'react';

interface FeaturePlaceholderProps {
  featureName: string;
}

const FeaturePlaceholder: React.FC<FeaturePlaceholderProps> = ({ featureName }) => {
  return (
    <div className="bg-white/50 border border-slate-200 p-8 rounded-lg shadow-sm text-center">
      <h2 className="text-2xl font-bold mb-4">{featureName}</h2>
      <p className="text-slate-600">This feature is under construction. Check back soon for updates.</p>
    </div>
  );
};

export default FeaturePlaceholder;