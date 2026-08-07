import * as z from 'zod';
import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const ProductCategoryConfigInputSchema = z.object({
    id: z.string(),
    category: ProductCategorySchema,
    billingPeriods: BillingPeriodSchema.array(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).strict();

export type ProductCategoryConfigInputType = z.infer<typeof ProductCategoryConfigInputSchema>;
