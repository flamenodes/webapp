import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  productId: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  billingPeriod: z.boolean().optional(),
  price: z.boolean().optional(),
  customDays: z.boolean().optional()
}).strict();
export const ProductBillingOptionSelectObjectSchema: z.ZodType<Prisma.ProductBillingOptionSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionSelect>;
export const ProductBillingOptionSelectObjectZodSchema = makeSchema();
