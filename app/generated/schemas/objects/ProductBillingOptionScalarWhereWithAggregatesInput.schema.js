import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumBillingPeriodWithAggregatesFilterObjectSchema as EnumBillingPeriodWithAggregatesFilterObjectSchema } from './EnumBillingPeriodWithAggregatesFilter.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
const productbillingoptionscalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    billingPeriod: z.union([z.lazy(() => EnumBillingPeriodWithAggregatesFilterObjectSchema), BillingPeriodSchema]).optional(),
    price: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema = productbillingoptionscalarwherewithaggregatesinputSchema;
export const ProductBillingOptionScalarWhereWithAggregatesInputObjectZodSchema = productbillingoptionscalarwherewithaggregatesinputSchema;
//# sourceMappingURL=ProductBillingOptionScalarWhereWithAggregatesInput.schema.js.map