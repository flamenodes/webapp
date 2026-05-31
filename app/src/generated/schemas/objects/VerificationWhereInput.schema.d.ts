import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const VerificationWhereInputObjectSchema: z.ZodType<Prisma.VerificationWhereInput>;
export declare const VerificationWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.VerificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.VerificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.VerificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.VerificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.VerificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    identifier: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    expiresAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodString]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodString]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodString]>>;
}, z.core.$strict>;
//# sourceMappingURL=VerificationWhereInput.schema.d.ts.map