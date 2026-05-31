import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiscountMinOrderByAggregateInput>;
export declare const DiscountMinOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    label: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    percentage: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountMinOrderByAggregateInput.schema.d.ts.map