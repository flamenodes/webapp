import * as z from 'zod';
export declare const TicketMessageDeleteResultSchema: z.ZodNullable<z.ZodObject<{
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
//# sourceMappingURL=TicketMessageDeleteResult.schema.d.ts.map