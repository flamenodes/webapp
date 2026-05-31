import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemOrderByRelationAggregateInput>;
export declare const OrderItemOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemOrderByRelationAggregateInput.schema.d.ts.map