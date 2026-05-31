import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const StatusNodeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StatusNodeAvgOrderByAggregateInput>;
export declare const StatusNodeAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    port: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    latency: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    cpu: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    memory: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    disk: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=StatusNodeAvgOrderByAggregateInput.schema.d.ts.map