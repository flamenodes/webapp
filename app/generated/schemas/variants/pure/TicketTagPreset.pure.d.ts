import * as z from 'zod';
export declare const TicketTagPresetModelSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type TicketTagPresetPureType = z.infer<typeof TicketTagPresetModelSchema>;
//# sourceMappingURL=TicketTagPreset.pure.d.ts.map