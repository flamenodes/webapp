import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserCreateNestedOneWithoutBillingAddressInputObjectSchema as UserCreateNestedOneWithoutBillingAddressInputObjectSchema } from './UserCreateNestedOneWithoutBillingAddressInput.schema'

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
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBillingAddressInputObjectSchema)
}).strict();
export const BillingAddressCreateInputObjectSchema: z.ZodType<Prisma.BillingAddressCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressCreateInput>;
export const BillingAddressCreateInputObjectZodSchema = makeSchema();
