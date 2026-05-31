import * as z from 'zod';
export declare const TicketStatusSchema: z.ZodEnum<{
    PENDING: "PENDING";
    OPEN: "OPEN";
    IN_PROGRESS: "IN_PROGRESS";
    RESOLVED: "RESOLVED";
    CLOSED: "CLOSED";
}>;
export type TicketStatus = z.infer<typeof TicketStatusSchema>;
//# sourceMappingURL=TicketStatus.schema.d.ts.map