import * as z from 'zod';
import { ProductFeatureSchema } from '../models/ProductFeature.schema';
import { DiscountSchema } from '../models/Discount.schema';
import { CartItemSchema } from '../models/CartItem.schema';
import { OrderItemSchema } from '../models/OrderItem.schema';
import { ProductBillingOptionSchema } from '../models/ProductBillingOption.schema';
export const ProductUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  planName: z.string(),
  icon: z.string().optional(),
  badge: z.string().optional(),
  category: z.any(),
  price: z.number().int(),
  sortOrder: z.number().int(),
  features: z.array(ProductFeatureSchema).optional(),
  featureCategory: z.string(),
  inStock: z.boolean(),
  discountId: z.string().optional(),
  discount: DiscountSchema.optional(),
  specs: z.any(),
  deployMode: z.string(),
  cartItems: z.array(CartItemSchema).optional(),
  orderItems: z.array(OrderItemSchema).optional(),
  billingOptions: z.array(ProductBillingOptionSchema).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));