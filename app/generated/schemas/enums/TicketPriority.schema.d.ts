import * as z from 'zod';
export declare const TicketPrioritySchema: z.ZodEnum<{
    LOW: "LOW";
    MEDIUM: "MEDIUM";
    HIGH: "HIGH";
    URGENT: "URGENT";
}>;
export type TicketPriority = z.infer<typeof TicketPrioritySchema>;
//# sourceMappingURL=TicketPriority.schema.d.ts.map