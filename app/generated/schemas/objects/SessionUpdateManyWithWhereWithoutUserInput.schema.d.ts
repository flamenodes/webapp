import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const SessionUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput>;
export declare const SessionUpdateManyWithWhereWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.SessionScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.SessionUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedUpdateManyWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=SessionUpdateManyWithWhereWithoutUserInput.schema.d.ts.map