export interface CoreModule {
  name: string;
  description: string;
}

export const coreModules: CoreModule[] = [
  { name: 'InstrumentParser', description: 'Detects type (order vs bearer), parses endorsements' },
  { name: 'EndorsementEngine', description: 'Applies correct endorsement logic per UCC §3-204 to §3-206' },
  { name: 'TenderTracker', description: 'Logs offers of payment, even if rejected' },
  { name: 'DischargeLogger', description: 'Records lawful discharge events, including acceptance, compromise, or refusal' },
  { name: 'JurisdictionOverlay', description: 'Routes logic based on land/air/water domains and equity remedy' },
  { name: 'CommentaryOverlay', description: 'Integrates teachings from Brandon and David to guide AI reflection and user education' },
];