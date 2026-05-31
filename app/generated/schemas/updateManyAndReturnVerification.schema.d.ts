import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const VerificationUpdateManyAndReturnSchema: z.ZodType<Prisma.VerificationUpdateManyAndReturnArgs>;
export declare const VerificationUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.VerificationUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.VerificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnVerification.schema.d.ts.map