import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCounterAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterAvgOrderByAggregateInput>;
export declare const TicketCounterAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    seq: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCounterAvgOrderByAggregateInput.schema.d.ts.map