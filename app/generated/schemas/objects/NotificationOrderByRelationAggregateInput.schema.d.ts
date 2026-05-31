import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.NotificationOrderByRelationAggregateInput>;
export declare const NotificationOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationOrderByRelationAggregateInput.schema.d.ts.map