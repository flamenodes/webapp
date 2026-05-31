import * as z from 'zod';
import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const ProductCategoryConfigResultSchema = z.object({
    id: z.string(),
    category: ProductCategorySchema,
    billingPeriods: BillingPeriodSchema.array(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();
//# sourceMappingURL=ProductCategoryConfig.result.js.map