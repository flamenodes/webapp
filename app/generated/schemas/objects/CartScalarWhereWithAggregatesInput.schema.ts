import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const cartscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  couponCode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CartScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CartScalarWhereWithAggregatesInput> = cartscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CartScalarWhereWithAggregatesInput>;
export const CartScalarWhereWithAggregatesInputObjectZodSchema = cartscalarwherewithaggregatesinputSchema;
