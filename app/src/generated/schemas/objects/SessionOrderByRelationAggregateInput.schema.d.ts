import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const SessionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput>;
export declare const SessionOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionOrderByRelationAggregateInput.schema.d.ts.map