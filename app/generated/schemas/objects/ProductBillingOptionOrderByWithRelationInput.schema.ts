import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  billingPeriod: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  customDays: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProductBillingOptionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionOrderByWithRelationInput>;
export const ProductBillingOptionOrderByWithRelationInputObjectZodSchema = makeSchema();
