export interface SirGavinPromptConfig {
  identity: string;
  scope: string;
  style: string;
  rules: string;
}
export const PROMPT_FIELDS: readonly string[];
export function validatePrompt(value: unknown): SirGavinPromptConfig;
export function buildPrompt(value: unknown): string;
