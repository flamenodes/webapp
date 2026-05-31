import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const VerificationCreateManyAndReturnSchema: z.ZodType<Prisma.VerificationCreateManyAndReturnArgs>;
export declare const VerificationCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.VerificationCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.VerificationCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnVerification.schema.d.ts.map