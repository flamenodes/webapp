import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const SessionMinAggregateInputObjectSchema: z.ZodType<Prisma.SessionMinAggregateInputType>;
export declare const SessionMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    expiresAt: z.ZodOptional<z.ZodLiteral<true>>;
    token: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    ipAddress: z.ZodOptional<z.ZodLiteral<true>>;
    userAgent: z.ZodOptional<z.ZodLiteral<true>>;
    userId: z.ZodOptional<z.ZodLiteral<true>>;
    impersonatedBy: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionMinAggregateInput.schema.d.ts.map