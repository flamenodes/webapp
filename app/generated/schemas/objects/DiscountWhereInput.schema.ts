import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { ProductListRelationFilterObjectSchema as ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema'

const discountwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DiscountWhereInputObjectSchema), z.lazy(() => DiscountWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiscountWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiscountWhereInputObjectSchema), z.lazy(() => DiscountWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  percentage: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  product: z.lazy(() => ProductListRelationFilterObjectSchema).optional()
}).strict();
export const DiscountWhereInputObjectSchema: z.ZodType<Prisma.DiscountWhereInput> = discountwhereinputSchema as unknown as z.ZodType<Prisma.DiscountWhereInput>;
export const DiscountWhereInputObjectZodSchema = discountwhereinputSchema;
