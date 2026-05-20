import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductCountOutputTypeCountCartItemsArgsObjectSchema as ProductCountOutputTypeCountCartItemsArgsObjectSchema } from './ProductCountOutputTypeCountCartItemsArgs.schema';
import { ProductCountOutputTypeCountOrderItemsArgsObjectSchema as ProductCountOutputTypeCountOrderItemsArgsObjectSchema } from './ProductCountOutputTypeCountOrderItemsArgs.schema'

const makeSchema = () => z.object({
  cartItems: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeCountCartItemsArgsObjectSchema)]).optional(),
  orderItems: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeCountOrderItemsArgsObjectSchema)]).optional()
}).strict();
export const ProductCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductCountOutputTypeSelect>;
export const ProductCountOutputTypeSelectObjectZodSchema = makeSchema();
