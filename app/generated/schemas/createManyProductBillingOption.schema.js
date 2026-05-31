import * as z from 'zod';
import { ProductBillingOptionCreateManyInputObjectSchema as ProductBillingOptionCreateManyInputObjectSchema } from './objects/ProductBillingOptionCreateManyInput.schema';
export const ProductBillingOptionCreateManySchema = z.object({ data: z.union([ProductBillingOptionCreateManyInputObjectSchema, z.array(ProductBillingOptionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ProductBillingOptionCreateManyZodSchema = z.object({ data: z.union([ProductBillingOptionCreateManyInputObjectSchema, z.array(ProductBillingOptionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyProductBillingOption.schema.js.map