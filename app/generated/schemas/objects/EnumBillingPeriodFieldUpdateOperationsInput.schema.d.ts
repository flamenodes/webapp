import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumBillingPeriodFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumBillingPeriodFieldUpdateOperationsInput>;
export declare const EnumBillingPeriodFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumBillingPeriodFieldUpdateOperationsInput.schema.d.ts.map