import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumBillingPeriodFilterObjectSchema as EnumBillingPeriodFilterObjectSchema } from './EnumBillingPeriodFilter.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
const productbillingoptionscalarwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => ProductBillingOptionScalarWhereInputObjectSchema), z.lazy(() => ProductBillingOptionScalarWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => ProductBillingOptionScalarWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProductBillingOptionScalarWhereInputObjectSchema), z.lazy(() => ProductBillingOptionScalarWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    billingPeriod: z.union([z.lazy(() => EnumBillingPeriodFilterObjectSchema), BillingPeriodSchema]).optional(),
    price: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ProductBillingOptionScalarWhereInputObjectSchema = productbillingoptionscalarwhereinputSchema;
export const ProductBillingOptionScalarWhereInputObjectZodSchema = productbillingoptionscalarwhereinputSchema;
//# sourceMappingURL=ProductBillingOptionScalarWhereInput.schema.js.map