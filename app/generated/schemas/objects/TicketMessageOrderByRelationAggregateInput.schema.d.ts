import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TicketMessageOrderByRelationAggregateInput>;
export declare const TicketMessageOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageOrderByRelationAggregateInput.schema.d.ts.map