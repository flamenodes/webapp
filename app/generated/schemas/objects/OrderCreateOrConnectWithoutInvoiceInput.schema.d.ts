import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderCreateOrConnectWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutInvoiceInput>;
export declare const OrderCreateOrConnectWithoutInvoiceInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateWithoutInvoiceInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateWithoutInvoiceInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderCreateOrConnectWithoutInvoiceInput.schema.d.ts.map