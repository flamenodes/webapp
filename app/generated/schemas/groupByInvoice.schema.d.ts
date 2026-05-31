import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const InvoiceGroupBySchema: z.ZodType<Prisma.InvoiceGroupByArgs>;
export declare const InvoiceGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.InvoiceWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.InvoiceOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.InvoiceOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        orderId: "orderId";
        invoiceNumber: "invoiceNumber";
        pdfUrl: "pdfUrl";
        razorpayData: "razorpayData";
        createdAt: "createdAt";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.InvoiceCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.InvoiceMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.InvoiceMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByInvoice.schema.d.ts.map