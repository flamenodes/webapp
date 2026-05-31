import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumTicketPriorityFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTicketPriorityFieldUpdateOperationsInput>;
export declare const EnumTicketPriorityFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumTicketPriorityFieldUpdateOperationsInput.schema.d.ts.map