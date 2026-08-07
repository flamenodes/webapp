import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './ProductBillingOptionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProductBillingOptionWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProductBillingOptionWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProductBillingOptionWhereInputObjectSchema).optional()
}).strict();
export const ProductBillingOptionListRelationFilterObjectSchema: z.ZodType<Prisma.ProductBillingOptionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionListRelationFilter>;
export const ProductBillingOptionListRelationFilterObjectZodSchema = makeSchema();
