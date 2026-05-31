import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderUpdateOneRequiredWithoutInvoiceNestedInputObjectSchema: z.ZodType<Prisma.OrderUpdateOneRequiredWithoutInvoiceNestedInput>;
export declare const OrderUpdateOneRequiredWithoutInvoiceNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateWithoutInvoiceInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateWithoutInvoiceInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderCreateOrConnectWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateOrConnectWithoutInvoiceInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderUpsertWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpsertWithoutInvoiceInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateToOneWithWhereWithoutInvoiceInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUpdateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateWithoutInvoiceInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedUpdateWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateWithoutInvoiceInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderUpdateOneRequiredWithoutInvoiceNestedInput.schema.d.ts.map