import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueOrderByRelationAggregateInput>;
export declare const ConfigurationValueOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueOrderByRelationAggregateInput.schema.d.ts.map