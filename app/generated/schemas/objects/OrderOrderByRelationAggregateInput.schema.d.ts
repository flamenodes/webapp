import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.OrderOrderByRelationAggregateInput>;
export declare const OrderOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderOrderByRelationAggregateInput.schema.d.ts.map