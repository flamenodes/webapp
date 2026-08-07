import * as z from 'zod';
import { BillingAddressSelectObjectSchema as BillingAddressSelectObjectSchema } from './BillingAddressSelect.schema';
import { BillingAddressIncludeObjectSchema as BillingAddressIncludeObjectSchema } from './BillingAddressInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BillingAddressSelectObjectSchema).optional(),
  include: z.lazy(() => BillingAddressIncludeObjectSchema).optional()
}).strict();
export const BillingAddressArgsObjectSchema = makeSchema();
export const BillingAddressArgsObjectZodSchema = makeSchema();
