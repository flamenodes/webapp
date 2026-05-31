import * as z from 'zod';
import { ProductBillingOptionUpdateManyMutationInputObjectSchema as ProductBillingOptionUpdateManyMutationInputObjectSchema } from './objects/ProductBillingOptionUpdateManyMutationInput.schema';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './objects/ProductBillingOptionWhereInput.schema';
export const ProductBillingOptionUpdateManySchema = z.object({ data: ProductBillingOptionUpdateManyMutationInputObjectSchema, where: ProductBillingOptionWhereInputObjectSchema.optional() }).strict();
export const ProductBillingOptionUpdateManyZodSchema = z.object({ data: ProductBillingOptionUpdateManyMutationInputObjectSchema, where: ProductBillingOptionWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyProductBillingOption.schema.js.map