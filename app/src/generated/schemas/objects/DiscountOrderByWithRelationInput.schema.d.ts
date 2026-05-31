import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DiscountOrderByWithRelationInput>;
export declare const DiscountOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
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
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductOrderByRelationAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountOrderByWithRelationInput.schema.d.ts.map