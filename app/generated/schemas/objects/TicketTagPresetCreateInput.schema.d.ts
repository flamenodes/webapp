import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketTagPresetCreateInputObjectSchema: z.ZodType<Prisma.TicketTagPresetCreateInput>;
export declare const TicketTagPresetCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketTagPresetCreateInput.schema.d.ts.map