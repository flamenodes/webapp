import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerCreateNestedOneWithoutOrderItemInputObjectSchema: z.ZodType<Prisma.ServerCreateNestedOneWithoutOrderItemInput>;
export declare const ServerCreateNestedOneWithoutOrderItemInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerCreateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateWithoutOrderItemInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedCreateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedCreateWithoutOrderItemInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerCreateOrConnectWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateOrConnectWithoutOrderItemInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerCreateNestedOneWithoutOrderItemInput.schema.d.ts.map