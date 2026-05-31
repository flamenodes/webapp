import * as z from 'zod';
export declare const TicketTagPresetInputSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type TicketTagPresetInputType = z.infer<typeof TicketTagPresetInputSchema>;
//# sourceMappingURL=TicketTagPreset.input.d.ts.map