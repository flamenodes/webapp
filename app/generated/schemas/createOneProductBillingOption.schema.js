import * as z from 'zod';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './objects/ProductBillingOptionSelect.schema';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './objects/ProductBillingOptionInclude.schema';
import { ProductBillingOptionCreateInputObjectSchema as ProductBillingOptionCreateInputObjectSchema } from './objects/ProductBillingOptionCreateInput.schema';
import { ProductBillingOptionUncheckedCreateInputObjectSchema as ProductBillingOptionUncheckedCreateInputObjectSchema } from './objects/ProductBillingOptionUncheckedCreateInput.schema';
export const ProductBillingOptionCreateOneSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), data: z.union([ProductBillingOptionCreateInputObjectSchema, ProductBillingOptionUncheckedCreateInputObjectSchema]) }).strict();
export const ProductBillingOptionCreateOneZodSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), include: ProductBillingOptionIncludeObjectSchema.optional(), data: z.union([ProductBillingOptionCreateInputObjectSchema, ProductBillingOptionUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneProductBillingOption.schema.js.map