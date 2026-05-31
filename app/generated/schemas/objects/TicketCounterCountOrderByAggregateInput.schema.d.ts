import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCounterCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterCountOrderByAggregateInput>;
export declare const TicketCounterCountOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    seq: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCounterCountOrderByAggregateInput.schema.d.ts.map