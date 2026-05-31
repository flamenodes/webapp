import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiscountMaxOrderByAggregateInput>;
export declare const DiscountMaxOrderByAggregateInputObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=DiscountMaxOrderByAggregateInput.schema.d.ts.map