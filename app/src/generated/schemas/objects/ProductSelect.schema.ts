import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { CartItemFindManySchema as CartItemFindManySchema } from '../findManyCartItem.schema';
import { OrderItemFindManySchema as OrderItemFindManySchema } from '../findManyOrderItem.schema';
import { DiscountArgsObjectSchema as DiscountArgsObjectSchema } from './DiscountArgs.schema';
import { ProductBillingOptionFindManySchema as ProductBillingOptionFindManySchema } from '../findManyProductBillingOption.schema';
import { ProductFeatureFindManySchema as ProductFeatureFindManySchema } from '../findManyProductFeature.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
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
export const ProductSelectObjectSchema: z.ZodType<Prisma.ProductSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductSelect>;
export const ProductSelectObjectZodSchema = makeSchema();
