import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BillingAddressCountOrderByAggregateInputObjectSchema as BillingAddressCountOrderByAggregateInputObjectSchema } from './BillingAddressCountOrderByAggregateInput.schema';
import { BillingAddressMaxOrderByAggregateInputObjectSchema as BillingAddressMaxOrderByAggregateInputObjectSchema } from './BillingAddressMaxOrderByAggregateInput.schema';
import { BillingAddressMinOrderByAggregateInputObjectSchema as BillingAddressMinOrderByAggregateInputObjectSchema } from './BillingAddressMinOrderByAggregateInput.schema'

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
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BillingAddressCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BillingAddressMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BillingAddressMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BillingAddressOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BillingAddressOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressOrderByWithAggregationInput>;
export const BillingAddressOrderByWithAggregationInputObjectZodSchema = makeSchema();
