import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCounterUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.TicketCounterUncheckedUpdateManyInput>;
export declare const TicketCounterUncheckedUpdateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    seq: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCounterUncheckedUpdateManyInput.schema.d.ts.map