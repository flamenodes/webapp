import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { ProductCreateNestedOneWithoutBillingOptionsInputObjectSchema as ProductCreateNestedOneWithoutBillingOptionsInputObjectSchema } from './ProductCreateNestedOneWithoutBillingOptionsInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    billingPeriod: BillingPeriodSchema,
    price: z.number().int(),
    product: z.lazy(() => ProductCreateNestedOneWithoutBillingOptionsInputObjectSchema)
}).strict();
export const ProductBillingOptionCreateInputObjectSchema = makeSchema();
export const ProductBillingOptionCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionCreateInput.schema.js.map