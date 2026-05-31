import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const VerificationCreateOneSchema: z.ZodType<Prisma.VerificationCreateArgs>;
export declare const VerificationCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.VerificationCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationCreateInput, unknown>>, z.ZodType<Prisma.VerificationUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneVerification.schema.d.ts.map