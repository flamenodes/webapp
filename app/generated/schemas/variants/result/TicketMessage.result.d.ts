import * as z from 'zod';
export declare const TicketMessageResultSchema: z.ZodObject<{
    id: z.ZodString;
    ticketId: z.ZodString;
    ticket: z.ZodUnknown;
    senderId: z.ZodString;
    sender: z.ZodUnknown;
    senderRole: z.ZodEnum<{
        USER: "USER";
        SUPPORT: "SUPPORT";
        ADMIN: "ADMIN";
    }>;
    content: z.ZodString;
    attachments: z.ZodNullable<z.ZodUnknown>;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type TicketMessageResultType = z.infer<typeof TicketMessageResultSchema>;
//# sourceMappingURL=TicketMessage.result.d.ts.map