import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const EnumCouponTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumCouponTypeFieldUpdateOperationsInput>;
export declare const EnumCouponTypeFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumCouponTypeFieldUpdateOperationsInput.schema.d.ts.map