import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCounterMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterMinOrderByAggregateInput>;
export declare const TicketCounterMinOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    seq: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCounterMinOrderByAggregateInput.schema.d.ts.map