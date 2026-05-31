import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.InvoiceOrderByWithRelationInput>;
export declare const InvoiceOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    orderId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    invoiceNumber: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    pdfUrl: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    razorpayData: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    order: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderOrderByWithRelationInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceOrderByWithRelationInput.schema.d.ts.map