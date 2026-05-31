import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketListRelationFilterObjectSchema: z.ZodType<Prisma.TicketListRelationFilter>;
export declare const TicketListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketListRelationFilter.schema.d.ts.map