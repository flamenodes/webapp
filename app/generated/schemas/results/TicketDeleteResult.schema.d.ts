import * as z from 'zod';
export declare const TicketDeleteResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    ticketId: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodUnknown;
    priority: z.ZodUnknown;
    userId: z.ZodString;
    user: z.ZodUnknown;
    assignedToId: z.ZodOptional<z.ZodString>;
    assignedTo: z.ZodOptional<z.ZodUnknown>;
    channelName: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    messages: z.ZodArray<z.ZodUnknown>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    closedAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>>;
//# sourceMappingURL=TicketDeleteResult.schema.d.ts.map