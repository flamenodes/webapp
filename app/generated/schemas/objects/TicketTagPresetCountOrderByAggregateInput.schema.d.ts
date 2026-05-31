import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketTagPresetCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketTagPresetCountOrderByAggregateInput>;
export declare const TicketTagPresetCountOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    name: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketTagPresetCountOrderByAggregateInput.schema.d.ts.map