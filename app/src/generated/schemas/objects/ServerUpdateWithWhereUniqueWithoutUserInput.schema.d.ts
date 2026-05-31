import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerUpdateWithWhereUniqueWithoutUserInput>;
export declare const ServerUpdateWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ServerUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ServerUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedUpdateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ServerUpdateWithWhereUniqueWithoutUserInput.schema.d.ts.map