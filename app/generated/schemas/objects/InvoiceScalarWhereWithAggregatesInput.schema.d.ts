import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput>;
export declare const InvoiceScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceScalarWhereWithAggregatesInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    orderId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    invoiceNumber: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    pdfUrl: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    razorpayData: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.JsonNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.JsonNullableWithAggregatesFilter<never>, unknown>>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceScalarWhereWithAggregatesInput.schema.d.ts.map