import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { BillingAddressWhereInputObjectSchema as BillingAddressWhereInputObjectSchema } from './BillingAddressWhereInput.schema';
import { BillingAddressUpdateWithoutUserInputObjectSchema as BillingAddressUpdateWithoutUserInputObjectSchema } from './BillingAddressUpdateWithoutUserInput.schema';
import { BillingAddressUncheckedUpdateWithoutUserInputObjectSchema as BillingAddressUncheckedUpdateWithoutUserInputObjectSchema } from './BillingAddressUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillingAddressWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BillingAddressUpdateWithoutUserInputObjectSchema), z.lazy(() => BillingAddressUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const BillingAddressUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.BillingAddressUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressUpdateToOneWithWhereWithoutUserInput>;
export const BillingAddressUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
