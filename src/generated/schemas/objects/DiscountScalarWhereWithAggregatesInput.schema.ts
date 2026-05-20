import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const discountscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DiscountScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DiscountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiscountScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiscountScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DiscountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  percentage: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const DiscountScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput> = discountscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput>;
export const DiscountScalarWhereWithAggregatesInputObjectZodSchema = discountscalarwherewithaggregatesinputSchema;
