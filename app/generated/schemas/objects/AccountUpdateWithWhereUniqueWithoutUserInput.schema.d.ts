import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput>;
export declare const AccountUpdateWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedUpdateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUpdateWithWhereUniqueWithoutUserInput.schema.d.ts.map