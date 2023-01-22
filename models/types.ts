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
