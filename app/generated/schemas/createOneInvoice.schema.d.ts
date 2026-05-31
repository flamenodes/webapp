import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const InvoiceCreateOneSchema: z.ZodType<Prisma.InvoiceCreateArgs>;
export declare const InvoiceCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.InvoiceInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.InvoiceCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateInput, unknown>>, z.ZodType<Prisma.InvoiceUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneInvoice.schema.d.ts.map