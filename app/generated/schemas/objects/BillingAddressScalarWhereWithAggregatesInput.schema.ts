import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const billingaddressscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BillingAddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BillingAddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BillingAddressScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BillingAddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BillingAddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  address: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  city: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  zip: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  country: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BillingAddressScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BillingAddressScalarWhereWithAggregatesInput> = billingaddressscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BillingAddressScalarWhereWithAggregatesInput>;
export const BillingAddressScalarWhereWithAggregatesInputObjectZodSchema = billingaddressscalarwherewithaggregatesinputSchema;
