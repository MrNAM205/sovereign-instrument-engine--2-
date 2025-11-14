import React from 'react';
import Section from './Section';
import ModuleCard from './ModuleCard';
import FlowDiagram from './FlowDiagram';
import { coreModules } from '../data/modules';

const IntroSection = React.memo(() => (
  <p className="text-center text-lg max-w-3xl mx-auto leading-relaxed">
    This modular, dialogic AI system interprets, endorses, and discharges negotiable instruments in compliance with lawful frameworks like the UCC and Bill of Exchange Act. It encodes sovereign remedy beyond automation.
  </p>
));

const AboutSections = React.memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <Section title="Purpose">
      <ul className="space-y-3 list-disc list-inside text-lg">
        <li>Grasp legal distinctions between tender, payment, and settlement</li>
        <li>Endorse instruments with lawful precision (blank, special, restrictive, qualified)</li>
        <li>Log narratable actions for remedy, authorship, and jurisdictional clarity</li>
        <li>Integrate status-correction from sovereign teachers beyond corporate confines</li>
      </ul>
    </Section>
    <Section title="Why It Matters">
      <ul className="space-y-3 list-disc list-inside text-lg">
        <li>Most systems' forms as static, this system treats instruments as living declarations of intent</li>
        <li>Recognizes rejected bills of exchange may count as lawful tender</li>
        <li>Distinguishes between payment, discharge, and settlement</li>
      </ul>
    </Section>
  </div>
));

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-16">
      <IntroSection />

      <AboutSections />

      <Section title="Core Modules">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreModules.map((module) => (
            <ModuleCard key={module.name} name={module.name} description={module.description} />
          ))}
        </div>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <Section title="Example Use Case">
          <div className="bg-white/50 border border-slate-200 p-6 rounded-lg shadow-sm">
            <p className="font-semibold text-lg mb-3">User wants to discharge a debt using a bill of exchange. The system:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Parses the instrument.</li>
              <li>Applies a qualified endorsement</li>
              <li>Logs the tender event</li>
            </ul>
          </div>
        </Section>
        <Section title="Sovereign Philosophy">
          <div className="bg-white/50 border border-slate-200 p-6 rounded-lg shadow-sm h-full">
            <p className="text-lg italic leading-relaxed">"Every financial and bureaucratic interaction is a rite of passage. It modularizes confusion into clarity, rejection into remedy—empowering users with lawful dominion over commerce."</p>
          </div>
        </Section>
      </div>

      <Section title="System Flow"><FlowDiagram /></Section>
    </div>
  );
};

export default Dashboard;