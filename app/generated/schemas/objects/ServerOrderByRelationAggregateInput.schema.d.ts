import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ServerOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ServerOrderByRelationAggregateInput>;
export declare const ServerOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerOrderByRelationAggregateInput.schema.d.ts.map