import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const InvoiceUpsertOneSchema: z.ZodType<Prisma.InvoiceUpsertArgs>;
export declare const InvoiceUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.InvoiceInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.InvoiceWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.InvoiceCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateInput, unknown>>, z.ZodType<Prisma.InvoiceUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.InvoiceUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUpdateInput, unknown>>, z.ZodType<Prisma.InvoiceUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneInvoice.schema.d.ts.map