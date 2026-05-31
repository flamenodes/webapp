import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumTicketStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTicketStatusFieldUpdateOperationsInput>;
export declare const EnumTicketStatusFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        OPEN: "OPEN";
        IN_PROGRESS: "IN_PROGRESS";
        RESOLVED: "RESOLVED";
        CLOSED: "CLOSED";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumTicketStatusFieldUpdateOperationsInput.schema.d.ts.map