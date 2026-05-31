import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TicketCountOutputTypeSelect>;
export declare const TicketCountOutputTypeSelectObjectZodSchema: z.ZodObject<{
    messages: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCountOutputTypeSelect.schema.d.ts.map