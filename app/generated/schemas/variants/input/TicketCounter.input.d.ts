import * as z from 'zod';
export declare const TicketCounterInputSchema: z.ZodObject<{
    id: z.ZodString;
    seq: z.ZodNumber;
}, z.core.$strict>;
export type TicketCounterInputType = z.infer<typeof TicketCounterInputSchema>;
//# sourceMappingURL=TicketCounter.input.d.ts.map