import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const BillingAddressUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BillingAddressUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressUncheckedCreateInput>;
export const BillingAddressUncheckedCreateInputObjectZodSchema = makeSchema();
