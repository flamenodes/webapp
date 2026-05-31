import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderUpdateToOneWithWhereWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutInvoiceInput>;
export declare const OrderUpdateToOneWithWhereWithoutInvoiceInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderUpdateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateWithoutInvoiceInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedUpdateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateWithoutInvoiceInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderUpdateToOneWithWhereWithoutInvoiceInput.schema.d.ts.map