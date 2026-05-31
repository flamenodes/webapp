import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductBillingOptionSelectObjectSchema as ProductBillingOptionSelectObjectSchema } from './ProductBillingOptionSelect.schema';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './ProductBillingOptionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProductBillingOptionSelectObjectSchema).optional(),
  include: z.lazy(() => ProductBillingOptionIncludeObjectSchema).optional()
}).strict();
export const ProductBillingOptionArgsObjectSchema = makeSchema();
export const ProductBillingOptionArgsObjectZodSchema = makeSchema();
