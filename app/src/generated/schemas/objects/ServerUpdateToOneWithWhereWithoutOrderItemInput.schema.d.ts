import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerUpdateToOneWithWhereWithoutOrderItemInputObjectSchema: z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutOrderItemInput>;
export declare const ServerUpdateToOneWithWhereWithoutOrderItemInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerUpdateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateWithoutOrderItemInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedUpdateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedUpdateWithoutOrderItemInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ServerUpdateToOneWithWhereWithoutOrderItemInput.schema.d.ts.map