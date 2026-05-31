import * as z from 'zod';
export declare const TicketMessageInputSchema: z.ZodObject<{
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
    attachments: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type TicketMessageInputType = z.infer<typeof TicketMessageInputSchema>;
//# sourceMappingURL=TicketMessage.input.d.ts.map