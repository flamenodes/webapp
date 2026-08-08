import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductIncludeObjectSchema as ProductIncludeObjectSchema } from './objects/ProductInclude.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './objects/ProductOrderByWithRelationInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';
import { ProductScalarFieldEnumSchema } from './enums/ProductScalarFieldEnum.schema';
import { CartItemFindManySchema } from './findManyCartItem.schema';
import { OrderItemFindManySchema } from './findManyOrderItem.schema';
import { DiscountArgsObjectSchema as DiscountArgsObjectSchema } from './objects/DiscountArgs.schema';
import { ProductBillingOptionFindManySchema } from './findManyProductBillingOption.schema';
import { ProductFeatureFindManySchema } from './findManyProductFeature.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './objects/ProductCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductFindManySelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
    id: z.boolean().optional(),
    deployMode: z.boolean().optional(),
    specs: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    category: z.boolean().optional(),
    icon: z.boolean().optional(),
    inStock: z.boolean().optional(),
    planName: z.boolean().optional(),
    price: z.boolean().optional(),
    discountId: z.boolean().optional(),
    featureCategory: z.boolean().optional(),
    badge: z.boolean().optional(),
    sortOrder: z.boolean().optional(),
    cartItems: z.union([z.boolean(), z.lazy(() => CartItemFindManySchema)]).optional(),
    orderItems: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
    discount: z.union([z.boolean(), z.lazy(() => DiscountArgsObjectSchema)]).optional(),
    billingOptions: z.union([z.boolean(), z.lazy(() => ProductBillingOptionFindManySchema)]).optional(),
    features: z.union([z.boolean(), z.lazy(() => ProductFeatureFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductSelect>;

export const ProductFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    deployMode: z.boolean().optional(),
    specs: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    category: z.boolean().optional(),
    icon: z.boolean().optional(),
    inStock: z.boolean().optional(),
    planName: z.boolean().optional(),
    price: z.boolean().optional(),
    discountId: z.boolean().optional(),
    featureCategory: z.boolean().optional(),
    badge: z.boolean().optional(),
    sortOrder: z.boolean().optional(),
    cartItems: z.union([z.boolean(), z.lazy(() => CartItemFindManySchema)]).optional(),
    orderItems: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
    discount: z.union([z.boolean(), z.lazy(() => DiscountArgsObjectSchema)]).optional(),
    billingOptions: z.union([z.boolean(), z.lazy(() => ProductBillingOptionFindManySchema)]).optional(),
    features: z.union([z.boolean(), z.lazy(() => ProductFeatureFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const ProductFindManySchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({ select: ProductFindManySelectSchema.optional(), include: z.lazy(() => ProductIncludeObjectSchema.optional()), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductFindManyArgs>;

export const ProductFindManyZodSchema = z.object({ select: ProductFindManySelectSchema.optional(), include: z.lazy(() => ProductIncludeObjectSchema.optional()), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict();