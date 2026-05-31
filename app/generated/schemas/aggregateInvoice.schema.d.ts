import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const InvoiceAggregateSchema: z.ZodType<Prisma.InvoiceAggregateArgs>;
export declare const InvoiceAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.InvoiceOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.InvoiceOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.InvoiceWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.InvoiceWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.InvoiceCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.InvoiceMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.InvoiceMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateInvoice.schema.d.ts.map