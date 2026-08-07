import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const ProductBillingOptionIncludeObjectSchema: z.ZodType<Prisma.ProductBillingOptionInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionInclude>;
export const ProductBillingOptionIncludeObjectZodSchema = makeSchema();
