import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ServerUncheckedCreateNestedOneWithoutOrderItemInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateNestedOneWithoutOrderItemInput>;
export declare const ServerUncheckedCreateNestedOneWithoutOrderItemInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerCreateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateWithoutOrderItemInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedCreateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedCreateWithoutOrderItemInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerCreateOrConnectWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateOrConnectWithoutOrderItemInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerUncheckedCreateNestedOneWithoutOrderItemInput.schema.d.ts.map