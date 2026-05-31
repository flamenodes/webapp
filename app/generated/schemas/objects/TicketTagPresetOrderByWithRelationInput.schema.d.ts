import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketTagPresetOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TicketTagPresetOrderByWithRelationInput>;
export declare const TicketTagPresetOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=TicketTagPresetOrderByWithRelationInput.schema.d.ts.map