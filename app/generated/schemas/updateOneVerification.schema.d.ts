import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const VerificationUpdateOneSchema: z.ZodType<Prisma.VerificationUpdateArgs>;
export declare const VerificationUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.VerificationUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationUpdateInput, unknown>>, z.ZodType<Prisma.VerificationUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.VerificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneVerification.schema.d.ts.map