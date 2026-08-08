import * as z from 'zod';
import { CartItemSchema } from '../models/CartItem.schema';
import { OrderItemSchema } from '../models/OrderItem.schema';
import { DiscountSchema } from '../models/Discount.schema';
import { ProductBillingOptionSchema } from '../models/ProductBillingOption.schema';
import { ProductFeatureSchema } from '../models/ProductFeature.schema';
export const ProductUpsertResultSchema = z.object({
  id: z.string(),
  deployMode: z.string(),
  specs: z.any(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  category: z.any(),
  icon: z.string().optional(),
  inStock: z.boolean(),
  planName: z.string(),
  price: z.number().int(),
  discountId: z.string().optional(),
  featureCategory: z.string(),
  badge: z.string().optional(),
  sortOrder: z.number().int(),
  cartItems: z.array(CartItemSchema).optional(),
  orderItems: z.array(OrderItemSchema).optional(),
  discount: DiscountSchema.optional(),
  billingOptions: z.array(ProductBillingOptionSchema).optional(),
  features: z.array(ProductFeatureSchema).optional()
});