import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCounterOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TicketCounterOrderByWithRelationInput>;
export declare const TicketCounterOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    seq: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCounterOrderByWithRelationInput.schema.d.ts.map