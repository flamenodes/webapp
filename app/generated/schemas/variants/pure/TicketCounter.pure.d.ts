import * as z from 'zod';
export declare const TicketCounterModelSchema: z.ZodObject<{
    id: z.ZodString;
    seq: z.ZodNumber;
}, z.core.$strict>;
export type TicketCounterPureType = z.infer<typeof TicketCounterModelSchema>;
//# sourceMappingURL=TicketCounter.pure.d.ts.map