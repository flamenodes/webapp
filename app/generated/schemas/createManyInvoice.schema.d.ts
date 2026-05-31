import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const InvoiceCreateManySchema: z.ZodType<Prisma.InvoiceCreateManyArgs>;
export declare const InvoiceCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.InvoiceCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.InvoiceCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyInvoice.schema.d.ts.map