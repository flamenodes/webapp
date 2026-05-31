import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionOrderByWithRelationInput>;
export declare const ProductBillingOptionOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    productId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    billingPeriod: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    price: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductOrderByWithRelationInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionOrderByWithRelationInput.schema.d.ts.map