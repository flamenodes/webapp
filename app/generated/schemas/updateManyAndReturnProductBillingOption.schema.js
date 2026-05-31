import * as z from 'zod';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './objects/ProductBillingOptionSelect.schema';
import { ProductBillingOptionUpdateManyMutationInputObjectSchema as ProductBillingOptionUpdateManyMutationInputObjectSchema } from './objects/ProductBillingOptionUpdateManyMutationInput.schema';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './objects/ProductBillingOptionWhereInput.schema';
export const ProductBillingOptionUpdateManyAndReturnSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), data: ProductBillingOptionUpdateManyMutationInputObjectSchema, where: ProductBillingOptionWhereInputObjectSchema.optional() }).strict();
export const ProductBillingOptionUpdateManyAndReturnZodSchema = z.object({ select: ProductBillingOptionSelectObjectSchema.optional(), data: ProductBillingOptionUpdateManyMutationInputObjectSchema, where: ProductBillingOptionWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnProductBillingOption.schema.js.map