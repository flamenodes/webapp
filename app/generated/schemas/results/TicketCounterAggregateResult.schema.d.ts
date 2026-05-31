import * as z from 'zod';
export declare const TicketCounterAggregateResultSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        seq: z.ZodNumber;
    }, z.core.$strip>>;
    _sum: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        seq: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>>;
    _avg: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        seq: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>>;
    _min: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        seq: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>>;
    _max: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        seq: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
//# sourceMappingURL=TicketCounterAggregateResult.schema.d.ts.map