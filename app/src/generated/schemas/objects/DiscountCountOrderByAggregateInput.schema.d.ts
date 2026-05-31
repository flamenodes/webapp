import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiscountCountOrderByAggregateInput>;
export declare const DiscountCountOrderByAggregateInputObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=DiscountCountOrderByAggregateInput.schema.d.ts.map