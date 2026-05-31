import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const InvoiceFindFirstOrThrowSelectSchema: z.ZodType<Prisma.InvoiceSelect>;
export declare const InvoiceFindFirstOrThrowSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    orderId: z.ZodOptional<z.ZodBoolean>;
    order: z.ZodOptional<z.ZodBoolean>;
    invoiceNumber: z.ZodOptional<z.ZodBoolean>;
    pdfUrl: z.ZodOptional<z.ZodBoolean>;
    razorpayData: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const InvoiceFindFirstOrThrowSchema: z.ZodType<Prisma.InvoiceFindFirstOrThrowArgs>;
export declare const InvoiceFindFirstOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.InvoiceInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.InvoiceOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.InvoiceOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.InvoiceWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.InvoiceWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        orderId: "orderId";
        invoiceNumber: "invoiceNumber";
        pdfUrl: "pdfUrl";
        razorpayData: "razorpayData";
        createdAt: "createdAt";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        orderId: "orderId";
        invoiceNumber: "invoiceNumber";
        pdfUrl: "pdfUrl";
        razorpayData: "razorpayData";
        createdAt: "createdAt";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstOrThrowInvoice.schema.d.ts.map