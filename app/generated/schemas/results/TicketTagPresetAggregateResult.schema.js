import * as z from 'zod';
export const TicketTagPresetAggregateResultSchema = z.object({ _count: z.object({
        id: z.number(),
        name: z.number(),
        createdAt: z.number()
    }).optional(),
    _min: z.object({
        id: z.string().nullable(),
        name: z.string().nullable(),
        createdAt: z.date().nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.string().nullable(),
        name: z.string().nullable(),
        createdAt: z.date().nullable()
    }).nullable().optional() });
//# sourceMappingURL=TicketTagPresetAggregateResult.schema.js.map