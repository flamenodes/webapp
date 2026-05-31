import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const VerificationFindUniqueSchema: z.ZodType<Prisma.VerificationFindUniqueArgs>;
export declare const VerificationFindUniqueZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.VerificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueVerification.schema.d.ts.map