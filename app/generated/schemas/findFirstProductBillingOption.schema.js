import * as z from 'zod';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './objects/ProductBillingOptionInclude.schema';
import { ProductBillingOptionOrderByWithRelationInputObjectSchema as ProductBillingOptionOrderByWithRelationInputObjectSchema } from './objects/ProductBillingOptionOrderByWithRelationInput.schema';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './objects/ProductBillingOptionWhereInput.schema';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './objects/ProductBillingOptionWhereUniqueInput.schema';
import { ProductBillingOptionScalarFieldEnumSchema } from './enums/ProductBillingOptionScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ProductBillingOptionFindFirstSelectSchema = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    price: z.boolean().optional()
}).strict();
export const ProductBillingOptionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    price: z.boolean().optional()
}).strict();
export const ProductBillingOptionFindFirstSchema = z.object({ select: ProductBillingOptionFindFirstSelectSchema.optional(), include: z.lazy(() => ProductBillingOptionIncludeObjectSchema.optional()), orderBy: z.union([ProductBillingOptionOrderByWithRelationInputObjectSchema, ProductBillingOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductBillingOptionWhereInputObjectSchema.optional(), cursor: ProductBillingOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductBillingOptionScalarFieldEnumSchema, ProductBillingOptionScalarFieldEnumSchema.array()]).optional() }).strict();
export const ProductBillingOptionFindFirstZodSchema = z.object({ select: ProductBillingOptionFindFirstSelectSchema.optional(), include: z.lazy(() => ProductBillingOptionIncludeObjectSchema.optional()), orderBy: z.union([ProductBillingOptionOrderByWithRelationInputObjectSchema, ProductBillingOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductBillingOptionWhereInputObjectSchema.optional(), cursor: ProductBillingOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductBillingOptionScalarFieldEnumSchema, ProductBillingOptionScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findFirstProductBillingOption.schema.js.map