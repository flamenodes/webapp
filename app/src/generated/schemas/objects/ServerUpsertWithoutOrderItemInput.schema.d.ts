import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerUpsertWithoutOrderItemInputObjectSchema: z.ZodType<Prisma.ServerUpsertWithoutOrderItemInput>;
export declare const ServerUpsertWithoutOrderItemInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerUpdateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateWithoutOrderItemInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedUpdateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedUpdateWithoutOrderItemInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerCreateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateWithoutOrderItemInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedCreateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedCreateWithoutOrderItemInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerUpsertWithoutOrderItemInput.schema.d.ts.map