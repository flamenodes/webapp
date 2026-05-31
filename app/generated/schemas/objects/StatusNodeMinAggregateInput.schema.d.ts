import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const StatusNodeMinAggregateInputObjectSchema: z.ZodType<Prisma.StatusNodeMinAggregateInputType>;
export declare const StatusNodeMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    name: z.ZodOptional<z.ZodLiteral<true>>;
    ip: z.ZodOptional<z.ZodLiteral<true>>;
    location: z.ZodOptional<z.ZodLiteral<true>>;
    type: z.ZodOptional<z.ZodLiteral<true>>;
    port: z.ZodOptional<z.ZodLiteral<true>>;
    protocol: z.ZodOptional<z.ZodLiteral<true>>;
    status: z.ZodOptional<z.ZodLiteral<true>>;
    latency: z.ZodOptional<z.ZodLiteral<true>>;
    lastChecked: z.ZodOptional<z.ZodLiteral<true>>;
    cpu: z.ZodOptional<z.ZodLiteral<true>>;
    memory: z.ZodOptional<z.ZodLiteral<true>>;
    disk: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=StatusNodeMinAggregateInput.schema.d.ts.map