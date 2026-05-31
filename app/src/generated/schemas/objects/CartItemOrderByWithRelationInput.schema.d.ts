import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CartItemOrderByWithRelationInput>;
export declare const CartItemOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    cartId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    productId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    quantity: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    billingPeriod: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    cart: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartOrderByWithRelationInput, unknown>>>>;
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductOrderByWithRelationInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemOrderByWithRelationInput.schema.d.ts.map