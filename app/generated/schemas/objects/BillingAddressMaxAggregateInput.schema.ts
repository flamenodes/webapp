import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  address: z.literal(true).optional(),
  city: z.literal(true).optional(),
  state: z.literal(true).optional(),
  zip: z.literal(true).optional(),
  country: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const BillingAddressMaxAggregateInputObjectSchema: z.ZodType<Prisma.BillingAddressMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressMaxAggregateInputType>;
export const BillingAddressMaxAggregateInputObjectZodSchema = makeSchema();
