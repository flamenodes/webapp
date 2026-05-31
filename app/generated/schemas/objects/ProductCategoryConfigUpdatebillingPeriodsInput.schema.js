import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
const makeSchema = () => z.object({
    set: BillingPeriodSchema.array().optional(),
    push: z.union([BillingPeriodSchema, BillingPeriodSchema.array()]).optional()
}).strict();
export const ProductCategoryConfigUpdatebillingPeriodsInputObjectSchema = makeSchema();
export const ProductCategoryConfigUpdatebillingPeriodsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCategoryConfigUpdatebillingPeriodsInput.schema.js.map