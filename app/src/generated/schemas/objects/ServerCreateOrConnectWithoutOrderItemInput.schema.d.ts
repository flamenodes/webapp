import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerCreateOrConnectWithoutOrderItemInputObjectSchema: z.ZodType<Prisma.ServerCreateOrConnectWithoutOrderItemInput>;
export declare const ServerCreateOrConnectWithoutOrderItemInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerCreateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateWithoutOrderItemInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedCreateWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedCreateWithoutOrderItemInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ServerCreateOrConnectWithoutOrderItemInput.schema.d.ts.map