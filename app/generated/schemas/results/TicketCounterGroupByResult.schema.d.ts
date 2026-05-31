import * as z from 'zod';
export declare const TicketCounterGroupByResultSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    seq: z.ZodNumber;
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
}, z.core.$strip>>;
//# sourceMappingURL=TicketCounterGroupByResult.schema.d.ts.map