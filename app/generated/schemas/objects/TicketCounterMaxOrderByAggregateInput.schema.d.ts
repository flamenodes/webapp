import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCounterMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterMaxOrderByAggregateInput>;
export declare const TicketCounterMaxOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    seq: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCounterMaxOrderByAggregateInput.schema.d.ts.map