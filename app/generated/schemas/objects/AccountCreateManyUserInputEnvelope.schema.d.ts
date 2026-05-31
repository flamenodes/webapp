import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const AccountCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope>;
export declare const AccountCreateManyUserInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateManyUserInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.AccountCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateManyUserInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=AccountCreateManyUserInputEnvelope.schema.d.ts.map