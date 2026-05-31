import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductFeatureOrderByWithRelationInput>;
export declare const ProductFeatureOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    productId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    label: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductOrderByWithRelationInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureOrderByWithRelationInput.schema.d.ts.map