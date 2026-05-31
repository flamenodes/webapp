import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketTagPresetUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TicketTagPresetUncheckedCreateInput>;
export declare const TicketTagPresetUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketTagPresetUncheckedCreateInput.schema.d.ts.map