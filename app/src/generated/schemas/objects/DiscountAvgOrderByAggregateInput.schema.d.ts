import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiscountAvgOrderByAggregateInput>;
export declare const DiscountAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    percentage: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountAvgOrderByAggregateInput.schema.d.ts.map