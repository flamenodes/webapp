import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BillingAddressUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.BillingAddressUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressUncheckedCreateWithoutUserInput>;
export const BillingAddressUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
