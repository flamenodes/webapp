import * as z from 'zod';
export declare const TicketResultSchema: z.ZodObject<{
    id: z.ZodString;
    ticketId: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodEnum<{
        PENDING: "PENDING";
        OPEN: "OPEN";
        IN_PROGRESS: "IN_PROGRESS";
        RESOLVED: "RESOLVED";
        CLOSED: "CLOSED";
    }>;
    priority: z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>;
    userId: z.ZodString;
    user: z.ZodUnknown;
    assignedToId: z.ZodNullable<z.ZodString>;
    assignedTo: z.ZodNullable<z.ZodUnknown>;
    channelName: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    messages: z.ZodArray<z.ZodUnknown>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    closedAt: z.ZodNullable<z.ZodDate>;
}, z.core.$strict>;
export type TicketResultType = z.infer<typeof TicketResultSchema>;
//# sourceMappingURL=Ticket.result.d.ts.map