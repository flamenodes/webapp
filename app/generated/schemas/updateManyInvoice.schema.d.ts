import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const InvoiceUpdateManySchema: z.ZodType<Prisma.InvoiceUpdateManyArgs>;
export declare const InvoiceUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.InvoiceUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.InvoiceWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyInvoice.schema.d.ts.map