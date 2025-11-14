import { GeminiResponse, GroundingSource } from '../types/cockpit';

// --- API Configuration ---
// IMPORTANT: Do not hardcode API keys in your code. Use environment variables.
const GEMINI_MODEL = 'gemini-1.5-flash-latest'; // Updated to a stable, recent model
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=`;
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

/**
 * Calls the Gemini API with a user query and system prompt.
 * Implements exponential backoff for retries.
 */
export const callGeminiAPI = async (
  userQuery: string,
  systemPrompt: string,
  useGrounding: boolean = true,
): Promise<GeminiResponse | null> => {
  if (!API_KEY) {
    console.error("Gemini API Key is missing. Please set REACT_APP_GEMINI_API_KEY environment variable.");
    return { text: "API Key not configured. Please contact the administrator.", sources: [] };
  }

  // ... (Full function logic from GeminitryVeroBrix.txt)
};