import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
const makeSchema = () => z.object({
    set: BillingPeriodSchema.optional()
}).strict();
export const EnumBillingPeriodFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumBillingPeriodFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumBillingPeriodFieldUpdateOperationsInput.schema.js.map