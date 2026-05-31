import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceWhereUniqueInputObjectSchema: z.ZodType<Prisma.InvoiceWhereUniqueInput>;
export declare const InvoiceWhereUniqueInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    orderId: z.ZodOptional<z.ZodString>;
    invoiceNumber: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceWhereUniqueInput.schema.d.ts.map