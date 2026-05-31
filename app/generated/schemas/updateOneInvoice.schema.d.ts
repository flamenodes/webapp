import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const InvoiceUpdateOneSchema: z.ZodType<Prisma.InvoiceUpdateArgs>;
export declare const InvoiceUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.InvoiceInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.InvoiceUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUpdateInput, unknown>>, z.ZodType<Prisma.InvoiceUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.InvoiceWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneInvoice.schema.d.ts.map