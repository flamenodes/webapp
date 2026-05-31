import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerUpdateOneWithoutOrderItemNestedInputObjectSchema: z.ZodType<Prisma.ServerUpdateOneWithoutOrderItemNestedInput>;
export declare const ServerUpdateOneWithoutOrderItemNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerCreateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateWithoutOrderItemInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedCreateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedCreateWithoutOrderItemInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerCreateOrConnectWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateOrConnectWithoutOrderItemInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerUpsertWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpsertWithoutOrderItemInput, unknown>>>>;
    disconnect: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>]>>;
    delete: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>]>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateToOneWithWhereWithoutOrderItemInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUpdateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateWithoutOrderItemInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedUpdateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedUpdateWithoutOrderItemInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerUpdateOneWithoutOrderItemNestedInput.schema.d.ts.map