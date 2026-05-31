export type DevBroadcastPayload = {
    id: string;
    text: string;
    from?: string;
    timestamp: string;
};
export type TicketSocketMessageEvent = {
    type: 'new-message';
    message: unknown;
};
export type TicketSocketTicketEvent = {
    type: 'ticket-created' | 'ticket-updated';
    ticket: unknown;
};
export declare const emitDevBroadcast: (payload: DevBroadcastPayload) => Promise<boolean>;
export declare const emitTicketMessage: (ticketId: string, payload: TicketSocketMessageEvent) => Promise<boolean>;
export declare const emitTicketUpdated: (ticketId: string, payload: TicketSocketTicketEvent) => Promise<boolean>;
//# sourceMappingURL=socket-context.d.ts.map