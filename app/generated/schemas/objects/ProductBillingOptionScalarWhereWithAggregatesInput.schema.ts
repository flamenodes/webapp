import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumBillingPeriodWithAggregatesFilterObjectSchema as EnumBillingPeriodWithAggregatesFilterObjectSchema } from './EnumBillingPeriodWithAggregatesFilter.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const productbillingoptionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  billingPeriod: z.union([z.lazy(() => EnumBillingPeriodWithAggregatesFilterObjectSchema), BillingPeriodSchema]).optional(),
  price: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  customDays: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const ProductBillingOptionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionScalarWhereWithAggregatesInput> = productbillingoptionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProductBillingOptionScalarWhereWithAggregatesInput>;
export const ProductBillingOptionScalarWhereWithAggregatesInputObjectZodSchema = productbillingoptionscalarwherewithaggregatesinputSchema;
