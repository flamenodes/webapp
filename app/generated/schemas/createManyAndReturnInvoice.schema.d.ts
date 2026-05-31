import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const InvoiceCreateManyAndReturnSchema: z.ZodType<Prisma.InvoiceCreateManyAndReturnArgs>;
export declare const InvoiceCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.InvoiceCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.InvoiceCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnInvoice.schema.d.ts.map