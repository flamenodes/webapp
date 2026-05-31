export interface Ticket {
    id: string;
    title: string;
    status: 'all' | 'open' | 'closed' | 'pending';
    lastMessage: string;
    timestamp: string;
    unread?: boolean;
    priority?: 'high' | 'normal' | 'low';
    avatar?: string;
}
export declare const mockTickets: Ticket[];
//# sourceMappingURL=ticketData.d.ts.map