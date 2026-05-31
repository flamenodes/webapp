import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput>;
export declare const SessionUpsertWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.SessionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.SessionUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedUpdateWithoutUserInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.SessionCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=SessionUpsertWithWhereUniqueWithoutUserInput.schema.d.ts.map