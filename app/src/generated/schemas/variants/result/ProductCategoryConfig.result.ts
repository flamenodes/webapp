import * as z from 'zod';
import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const ProductCategoryConfigResultSchema = z.object({
    id: z.string(),
    category: ProductCategorySchema,
    billingPeriods: BillingPeriodSchema.array(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type ProductCategoryConfigResultType = z.infer<typeof ProductCategoryConfigResultSchema>;
