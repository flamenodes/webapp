import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const InvoiceFindUniqueSchema: z.ZodType<Prisma.InvoiceFindUniqueArgs>;
export declare const InvoiceFindUniqueZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.InvoiceInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.InvoiceWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueInvoice.schema.d.ts.map