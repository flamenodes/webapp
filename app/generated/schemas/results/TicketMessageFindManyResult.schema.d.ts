import * as z from 'zod';
export declare const TicketMessageFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
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
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=TicketMessageFindManyResult.schema.d.ts.map