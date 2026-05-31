import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceUpdateOneWithoutOrderNestedInputObjectSchema: z.ZodType<Prisma.InvoiceUpdateOneWithoutOrderNestedInput>;
export declare const InvoiceUpdateOneWithoutOrderNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.InvoiceCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.InvoiceUncheckedCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedCreateWithoutOrderInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.InvoiceCreateOrConnectWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateOrConnectWithoutOrderInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.InvoiceUpsertWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUpsertWithoutOrderInput, unknown>>>>;
    disconnect: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.InvoiceWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereInput, unknown>>>]>>;
    delete: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.InvoiceWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereInput, unknown>>>]>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.InvoiceWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.InvoiceUpdateToOneWithWhereWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUpdateToOneWithWhereWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.InvoiceUpdateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUpdateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.InvoiceUncheckedUpdateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedUpdateWithoutOrderInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceUpdateOneWithoutOrderNestedInput.schema.d.ts.map