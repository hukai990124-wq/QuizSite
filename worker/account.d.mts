export interface ChatSession {
  user_id: string;
  username: string;
}

export function findSession(request: Request, db: unknown): Promise<ChatSession | null>;
export function validateMutationRequest(request: Request): boolean;
