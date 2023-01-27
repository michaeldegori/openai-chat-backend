type conversationId = string;
type userId = string;

export interface User {
    id: string;
    name: string;
    email: string;
    chatHistory: conversationId[];
}

export interface Message {
    id: string;
    conversationId: string;
    message: string;
    timestamp: number;
    sender: userId | 'openai';
}

export interface Auth0Config {
    authRequired: boolean;
    auth0Logout: boolean;
    baseURL: string;
    clientID: string;
    issuerBaseURL: string;
    secret: string;
}
