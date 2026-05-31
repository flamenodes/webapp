import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceMaxAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceMaxAggregateInputType>;
export declare const InvoiceMaxAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    orderId: z.ZodOptional<z.ZodLiteral<true>>;
    invoiceNumber: z.ZodOptional<z.ZodLiteral<true>>;
    pdfUrl: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceMaxAggregateInput.schema.d.ts.map