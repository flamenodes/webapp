import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceMinAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceMinAggregateInputType>;
export declare const InvoiceMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    orderId: z.ZodOptional<z.ZodLiteral<true>>;
    invoiceNumber: z.ZodOptional<z.ZodLiteral<true>>;
    pdfUrl: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceMinAggregateInput.schema.d.ts.map