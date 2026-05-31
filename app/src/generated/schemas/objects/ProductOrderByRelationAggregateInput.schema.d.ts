import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput>;
export declare const ProductOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductOrderByRelationAggregateInput.schema.d.ts.map