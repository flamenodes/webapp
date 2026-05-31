import * as z from 'zod';
export declare const TicketTagPresetResultSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type TicketTagPresetResultType = z.infer<typeof TicketTagPresetResultSchema>;
//# sourceMappingURL=TicketTagPreset.result.d.ts.map