import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerUpsertWithWhereUniqueWithoutUserInput>;
export declare const ServerUpsertWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedUpdateWithoutUserInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ServerUpsertWithWhereUniqueWithoutUserInput.schema.d.ts.map