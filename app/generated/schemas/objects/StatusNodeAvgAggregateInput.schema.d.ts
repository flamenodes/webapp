import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const StatusNodeAvgAggregateInputObjectSchema: z.ZodType<Prisma.StatusNodeAvgAggregateInputType>;
export declare const StatusNodeAvgAggregateInputObjectZodSchema: z.ZodObject<{
    port: z.ZodOptional<z.ZodLiteral<true>>;
    latency: z.ZodOptional<z.ZodLiteral<true>>;
    cpu: z.ZodOptional<z.ZodLiteral<true>>;
    memory: z.ZodOptional<z.ZodLiteral<true>>;
    disk: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=StatusNodeAvgAggregateInput.schema.d.ts.map