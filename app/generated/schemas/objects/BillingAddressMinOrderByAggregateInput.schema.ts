import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  zip: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BillingAddressMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BillingAddressMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressMinOrderByAggregateInput>;
export const BillingAddressMinOrderByAggregateInputObjectZodSchema = makeSchema();
