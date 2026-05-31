import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const AccountCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput>;
export declare const AccountCreateOrConnectWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=AccountCreateOrConnectWithoutUserInput.schema.d.ts.map