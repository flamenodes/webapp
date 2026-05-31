import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumBillingPeriodFilterObjectSchema as EnumBillingPeriodFilterObjectSchema } from './EnumBillingPeriodFilter.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { ProductScalarRelationFilterObjectSchema as ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
const productbillingoptionwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => ProductBillingOptionWhereInputObjectSchema), z.lazy(() => ProductBillingOptionWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => ProductBillingOptionWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProductBillingOptionWhereInputObjectSchema), z.lazy(() => ProductBillingOptionWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    billingPeriod: z.union([z.lazy(() => EnumBillingPeriodFilterObjectSchema), BillingPeriodSchema]).optional(),
    price: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
    product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const ProductBillingOptionWhereInputObjectSchema = productbillingoptionwhereinputSchema;
export const ProductBillingOptionWhereInputObjectZodSchema = productbillingoptionwhereinputSchema;
//# sourceMappingURL=ProductBillingOptionWhereInput.schema.js.map