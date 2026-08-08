import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserCreateNestedOneWithoutBillingAddressInputObjectSchema as UserCreateNestedOneWithoutBillingAddressInputObjectSchema } from './UserCreateNestedOneWithoutBillingAddressInput.schema'

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
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBillingAddressInputObjectSchema)
}).strict();
export const BillingAddressCreateInputObjectSchema: z.ZodType<Prisma.BillingAddressCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressCreateInput>;
export const BillingAddressCreateInputObjectZodSchema = makeSchema();
