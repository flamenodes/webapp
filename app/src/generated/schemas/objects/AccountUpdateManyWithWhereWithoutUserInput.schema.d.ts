import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const AccountUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput>;
export declare const AccountUpdateManyWithWhereWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.AccountScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedUpdateManyWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUpdateManyWithWhereWithoutUserInput.schema.d.ts.map