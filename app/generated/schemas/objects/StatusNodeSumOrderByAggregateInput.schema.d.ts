import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const StatusNodeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StatusNodeSumOrderByAggregateInput>;
export declare const StatusNodeSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=StatusNodeSumOrderByAggregateInput.schema.d.ts.map