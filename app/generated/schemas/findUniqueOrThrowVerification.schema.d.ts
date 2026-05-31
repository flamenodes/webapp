import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const VerificationFindUniqueOrThrowSchema: z.ZodType<Prisma.VerificationFindUniqueOrThrowArgs>;
export declare const VerificationFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.VerificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowVerification.schema.d.ts.map