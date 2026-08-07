import * as z from 'zod';
export const BillingAddressCreateResultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown().optional(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});