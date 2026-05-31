import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderCreateNestedOneWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutInvoiceInput>;
export declare const OrderCreateNestedOneWithoutInvoiceInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateWithoutInvoiceInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateWithoutInvoiceInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderCreateOrConnectWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateOrConnectWithoutInvoiceInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderCreateNestedOneWithoutInvoiceInput.schema.d.ts.map