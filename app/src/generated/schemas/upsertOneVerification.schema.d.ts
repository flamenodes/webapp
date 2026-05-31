import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const VerificationUpsertOneSchema: z.ZodType<Prisma.VerificationUpsertArgs>;
export declare const VerificationUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.VerificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.VerificationCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationCreateInput, unknown>>, z.ZodType<Prisma.VerificationUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.VerificationUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationUpdateInput, unknown>>, z.ZodType<Prisma.VerificationUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneVerification.schema.d.ts.map