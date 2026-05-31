import * as z from 'zod';
export declare const TicketScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    title: "title";
    description: "description";
    createdAt: "createdAt";
    userId: "userId";
    status: "status";
    updatedAt: "updatedAt";
    ticketId: "ticketId";
    priority: "priority";
    assignedToId: "assignedToId";
    channelName: "channelName";
    tags: "tags";
    closedAt: "closedAt";
}>;
export type TicketScalarFieldEnum = z.infer<typeof TicketScalarFieldEnumSchema>;
//# sourceMappingURL=TicketScalarFieldEnum.schema.d.ts.map