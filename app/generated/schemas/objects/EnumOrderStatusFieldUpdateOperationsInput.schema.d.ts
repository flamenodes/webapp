import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumOrderStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumOrderStatusFieldUpdateOperationsInput>;
export declare const EnumOrderStatusFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        PAYMENT_FAILED: "PAYMENT_FAILED";
        PAID: "PAID";
        PROCESSING: "PROCESSING";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
        REFUNDED: "REFUNDED";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumOrderStatusFieldUpdateOperationsInput.schema.d.ts.map