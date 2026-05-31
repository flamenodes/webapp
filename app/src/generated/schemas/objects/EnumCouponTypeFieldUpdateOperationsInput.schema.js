import * as z from 'zod';
import { CouponTypeSchema } from '../enums/CouponType.schema';
const makeSchema = () => z.object({
    set: CouponTypeSchema.optional()
}).strict();
export const EnumCouponTypeFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumCouponTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumCouponTypeFieldUpdateOperationsInput.schema.js.map