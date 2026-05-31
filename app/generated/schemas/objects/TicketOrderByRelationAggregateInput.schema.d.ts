import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TicketOrderByRelationAggregateInput>;
export declare const TicketOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketOrderByRelationAggregateInput.schema.d.ts.map