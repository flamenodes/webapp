import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketScalarRelationFilterObjectSchema: z.ZodType<Prisma.TicketScalarRelationFilter>;
export declare const TicketScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>;
    isNot: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketScalarRelationFilter.schema.d.ts.map