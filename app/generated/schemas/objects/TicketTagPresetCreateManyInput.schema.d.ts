import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketTagPresetCreateManyInputObjectSchema: z.ZodType<Prisma.TicketTagPresetCreateManyInput>;
export declare const TicketTagPresetCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketTagPresetCreateManyInput.schema.d.ts.map