import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionAvgOrderByAggregateInput>;
export declare const ConfigurationOptionAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionAvgOrderByAggregateInput.schema.d.ts.map