import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput>;
export declare const AccountUpsertWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedUpdateWithoutUserInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUpsertWithWhereUniqueWithoutUserInput.schema.d.ts.map