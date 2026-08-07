import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ProductFeatureFindManySchema as ProductFeatureFindManySchema } from '../findManyProductFeature.schema';
import { DiscountArgsObjectSchema as DiscountArgsObjectSchema } from './DiscountArgs.schema';
import { CartItemFindManySchema as CartItemFindManySchema } from '../findManyCartItem.schema';
import { OrderItemFindManySchema as OrderItemFindManySchema } from '../findManyOrderItem.schema';
import { ProductBillingOptionFindManySchema as ProductBillingOptionFindManySchema } from '../findManyProductBillingOption.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  features: z.union([z.boolean(), z.lazy(() => ProductFeatureFindManySchema)]).optional(),
  discount: z.union([z.boolean(), z.lazy(() => DiscountArgsObjectSchema)]).optional(),
  cartItems: z.union([z.boolean(), z.lazy(() => CartItemFindManySchema)]).optional(),
  orderItems: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
  billingOptions: z.union([z.boolean(), z.lazy(() => ProductBillingOptionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductIncludeObjectSchema: z.ZodType<Prisma.ProductInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductInclude>;
export const ProductIncludeObjectZodSchema = makeSchema();
