import * as z from 'zod';
export declare const TicketMessageScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    createdAt: "createdAt";
    ticketId: "ticketId";
    senderId: "senderId";
    senderRole: "senderRole";
    content: "content";
    attachments: "attachments";
}>;
export type TicketMessageScalarFieldEnum = z.infer<typeof TicketMessageScalarFieldEnumSchema>;
//# sourceMappingURL=TicketMessageScalarFieldEnum.schema.d.ts.map