export interface Message {
    id: string;
    type: 'incoming' | 'outgoing' | 'system';
    content: string;
    timestamp: string;
    sender?: {
        name: string;
        avatar?: string;
    };
}
export interface TicketNote {
    id: string;
    content: string;
    author: string;
    timestamp: string;
}
export interface TicketDetail {
    id: string;
    ticketId: string;
    title: string;
    status: 'open' | 'closed' | 'pending';
    priority: 'high' | 'medium' | 'low';
    category: string;
    created: string;
    lastUpdated: string;
    user: {
        name: string;
        email: string;
        plan: string;
        avatar: string;
    };
    messages: Message[];
    notes: TicketNote[];
}
export declare const ticketDetails: Record<string, TicketDetail>;
//# sourceMappingURL=ticketDetails.d.ts.map