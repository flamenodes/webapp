import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
const makeSchema = () => z.object({
    set: BillingPeriodSchema.array()
}).strict();
export const ProductCategoryConfigCreatebillingPeriodsInputObjectSchema = makeSchema();
export const ProductCategoryConfigCreatebillingPeriodsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCategoryConfigCreatebillingPeriodsInput.schema.js.map