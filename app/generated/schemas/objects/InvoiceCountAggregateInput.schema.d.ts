import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceCountAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceCountAggregateInputType>;
export declare const InvoiceCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    orderId: z.ZodOptional<z.ZodLiteral<true>>;
    invoiceNumber: z.ZodOptional<z.ZodLiteral<true>>;
    pdfUrl: z.ZodOptional<z.ZodLiteral<true>>;
    razorpayData: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceCountAggregateInput.schema.d.ts.map