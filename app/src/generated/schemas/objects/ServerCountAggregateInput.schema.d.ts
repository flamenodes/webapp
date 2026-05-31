import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerCountAggregateInputObjectSchema: z.ZodType<Prisma.ServerCountAggregateInputType>;
export declare const ServerCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    userId: z.ZodOptional<z.ZodLiteral<true>>;
    orderItemId: z.ZodOptional<z.ZodLiteral<true>>;
    name: z.ZodOptional<z.ZodLiteral<true>>;
    type: z.ZodOptional<z.ZodLiteral<true>>;
    status: z.ZodOptional<z.ZodLiteral<true>>;
    ip: z.ZodOptional<z.ZodLiteral<true>>;
    port: z.ZodOptional<z.ZodLiteral<true>>;
    expiresAt: z.ZodOptional<z.ZodLiteral<true>>;
    resources: z.ZodOptional<z.ZodLiteral<true>>;
    pterodactylData: z.ZodOptional<z.ZodLiteral<true>>;
    suspended: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerCountAggregateInput.schema.d.ts.map