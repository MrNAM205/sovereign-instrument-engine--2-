
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import CreditDispute from './components/CreditDispute';
import FeaturePlaceholder from './components/FeaturePlaceholder';

type Feature = 'dashboard' | 'profile' | 'creditors' | 'tila' | 'fcra' | 'fdcpa' | 'endorse' | 'dispute';

const features: { id: Feature; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'profile', label: 'User Profile' },
  { id: 'creditors', label: 'Creditors' },
  { id: 'tila', label: 'TILA Analysis' },
  { id: 'fcra', label: 'FCRA Analysis' },
  { id: 'fdcpa', label: 'FDCPA Log' },
  { id: 'endorse', label: 'Bill Endorser' },
  { id: 'dispute', label: 'Credit Dispute' },
];

const App: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<Feature>('dashboard');

  const renderFeature = () => {
    switch (activeFeature) {
      case 'dashboard':
        return <Dashboard />;
      case 'dispute':
        return <CreditDispute />;
      case 'profile':
      case 'creditors':
      case 'tila':
      case 'fcra':
      case 'fdcpa':
      case 'endorse':
        const feature = features.find(f => f.id === activeFeature);
        return <FeaturePlaceholder featureName={feature?.label || 'Feature'} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen text-[#1E2A3A] font-sans p-4 sm:p-8 md:p-12">
      <main className="max-w-5xl mx-auto space-y-16">
        <Header />
        <nav className="bg-white/60 border border-slate-200 rounded-lg shadow-sm p-2 flex flex-wrap gap-2 justify-center">
          {features.map(feature => (
            <button key={feature.id} onClick={() => setActiveFeature(feature.id)} className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeFeature === feature.id ? 'bg-[#1E2A3A] text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
              {feature.label}
            </button>
          ))}
        </nav>
        <div className="mt-8">
          {renderFeature()}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
