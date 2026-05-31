import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const VerificationCreateManySchema: z.ZodType<Prisma.VerificationCreateManyArgs>;
export declare const VerificationCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.VerificationCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.VerificationCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyVerification.schema.d.ts.map