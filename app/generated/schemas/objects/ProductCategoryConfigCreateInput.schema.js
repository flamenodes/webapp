import * as z from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductCategoryConfigCreatebillingPeriodsInputObjectSchema as ProductCategoryConfigCreatebillingPeriodsInputObjectSchema } from './ProductCategoryConfigCreatebillingPeriodsInput.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    category: ProductCategorySchema,
    billingPeriods: z.union([z.lazy(() => ProductCategoryConfigCreatebillingPeriodsInputObjectSchema), BillingPeriodSchema.array()]).optional(),
    createdAt: z.coerce.date().optional()
}).strict();
export const ProductCategoryConfigCreateInputObjectSchema = makeSchema();
export const ProductCategoryConfigCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCategoryConfigCreateInput.schema.js.map