import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const VerificationCountAggregateInputObjectSchema: z.ZodType<Prisma.VerificationCountAggregateInputType>;
export declare const VerificationCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    identifier: z.ZodOptional<z.ZodLiteral<true>>;
    value: z.ZodOptional<z.ZodLiteral<true>>;
    expiresAt: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=VerificationCountAggregateInput.schema.d.ts.map