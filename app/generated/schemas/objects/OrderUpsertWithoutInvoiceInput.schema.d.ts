import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderUpsertWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithoutInvoiceInput>;
export declare const OrderUpsertWithoutInvoiceInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderUpdateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateWithoutInvoiceInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedUpdateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateWithoutInvoiceInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateWithoutInvoiceInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateWithoutInvoiceInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderUpsertWithoutInvoiceInput.schema.d.ts.map