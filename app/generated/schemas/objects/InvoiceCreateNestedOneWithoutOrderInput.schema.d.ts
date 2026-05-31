import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceCreateNestedOneWithoutOrderInputObjectSchema: z.ZodType<Prisma.InvoiceCreateNestedOneWithoutOrderInput>;
export declare const InvoiceCreateNestedOneWithoutOrderInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.InvoiceCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.InvoiceUncheckedCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedCreateWithoutOrderInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.InvoiceCreateOrConnectWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateOrConnectWithoutOrderInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.InvoiceWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceCreateNestedOneWithoutOrderInput.schema.d.ts.map