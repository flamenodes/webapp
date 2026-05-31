import * as z from 'zod';
export declare const TicketMessageFindUniqueResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    ticketId: z.ZodString;
    ticket: z.ZodUnknown;
    senderId: z.ZodString;
    sender: z.ZodUnknown;
    senderRole: z.ZodUnknown;
    content: z.ZodString;
    attachments: z.ZodOptional<z.ZodUnknown>;
    createdAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=TicketMessageFindUniqueResult.schema.d.ts.map