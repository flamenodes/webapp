import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionSumOrderByAggregateInput>;
export declare const ConfigurationOptionSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionSumOrderByAggregateInput.schema.d.ts.map