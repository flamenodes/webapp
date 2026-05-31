import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueAvgOrderByAggregateInput>;
export declare const ConfigurationValueAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    priceModifier: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueAvgOrderByAggregateInput.schema.d.ts.map