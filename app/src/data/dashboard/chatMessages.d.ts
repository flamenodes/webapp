export interface Message {
    id: string;
    type: 'incoming' | 'outgoing';
    content: string;
    timestamp: string;
    sender?: {
        name: string;
        avatar?: string;
    };
}
export declare const mockMessages: Message[];
//# sourceMappingURL=chatMessages.d.ts.map