import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string().optional(),
  zip: z.string(),
  country: z.string().optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const BillingAddressCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.BillingAddressCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressCreateWithoutUserInput>;
export const BillingAddressCreateWithoutUserInputObjectZodSchema = makeSchema();
