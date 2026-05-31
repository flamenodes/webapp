import * as z from 'zod';
export declare const TicketTagPresetAggregateResultSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodNumber;
        createdAt: z.ZodNumber;
    }, z.core.$strip>>;
    _min: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodDate>;
    }, z.core.$strip>>>;
    _max: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodDate>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
//# sourceMappingURL=TicketTagPresetAggregateResult.schema.d.ts.map