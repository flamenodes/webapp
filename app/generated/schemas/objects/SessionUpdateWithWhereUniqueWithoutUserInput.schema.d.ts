import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput>;
export declare const SessionUpdateWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.SessionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.SessionUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedUpdateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=SessionUpdateWithWhereUniqueWithoutUserInput.schema.d.ts.map