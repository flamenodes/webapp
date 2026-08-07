import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const productfeaturescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductFeatureScalarWhereInputObjectSchema), z.lazy(() => ProductFeatureScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductFeatureScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductFeatureScalarWhereInputObjectSchema), z.lazy(() => ProductFeatureScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ProductFeatureScalarWhereInputObjectSchema: z.ZodType<Prisma.ProductFeatureScalarWhereInput> = productfeaturescalarwhereinputSchema as unknown as z.ZodType<Prisma.ProductFeatureScalarWhereInput>;
export const ProductFeatureScalarWhereInputObjectZodSchema = productfeaturescalarwhereinputSchema;
