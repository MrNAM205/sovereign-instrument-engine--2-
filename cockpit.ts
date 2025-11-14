export interface Module {
  name: string;
  description: string;
}

export interface RemedyLogEntry {
    id: string;
    timestamp: any; // Keep as 'any' to handle Firebase ServerValue, format on client
    event: string;
    module: string;
    userId: string;
}

export interface GroundingSource {
    uri: string;
    title: string;
}

export interface GeminiResponse {
    text: string;
    sources: GroundingSource[];
}

export interface FDCPAViolation {
    id: string;
    debtCollector: string;
    violationType: string;
    date: string; // This will be a string formatted on the client
    details: string;
    timestamp: any; // Keep as 'any' for Firebase ServerValue
}

export interface UserProfile {
    legalName: string;
    livingName: string;
    address: string;
    trustId: string;
    status: 'De Jure' | 'De Facto';
}

export interface Creditor {
    id: string;
    name:string;
    address: string;
    accountNumber: string;
    status: 'Active' | 'Disputed' | 'Discharged';
}

export interface TILAAnalysisResult {
    aprValid: boolean;
    financeChargeValid: boolean;
    hiddenFeesFound: string[];
    remedyGuidance: string;
}

// Mock Profile Data for new users
export const MOCK_PROFILE: UserProfile = {
    legalName: 'JOHN HENRY DOE (ALL CAPS)',
    livingName: 'John Henry, of the family Doe',
    address: '100 Sovereign Way, Liberty City, State',
    trustId: 'Pvt-TR-XYZ-8765',
    status: 'De Jure',
};