import * as z from 'zod';
export declare const TicketCounterResultSchema: z.ZodObject<{
    id: z.ZodString;
    seq: z.ZodNumber;
}, z.core.$strict>;
export type TicketCounterResultType = z.infer<typeof TicketCounterResultSchema>;
//# sourceMappingURL=TicketCounter.result.d.ts.map