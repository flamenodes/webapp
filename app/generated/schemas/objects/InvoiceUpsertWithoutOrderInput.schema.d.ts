import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceUpsertWithoutOrderInputObjectSchema: z.ZodType<Prisma.InvoiceUpsertWithoutOrderInput>;
export declare const InvoiceUpsertWithoutOrderInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.InvoiceUpdateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUpdateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.InvoiceUncheckedUpdateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedUpdateWithoutOrderInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.InvoiceCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.InvoiceUncheckedCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedCreateWithoutOrderInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.InvoiceWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceUpsertWithoutOrderInput.schema.d.ts.map