import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueSumOrderByAggregateInput>;
export declare const ConfigurationValueSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    priceModifier: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueSumOrderByAggregateInput.schema.d.ts.map