import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { BillingAddressUpdateWithoutUserInputObjectSchema as BillingAddressUpdateWithoutUserInputObjectSchema } from './BillingAddressUpdateWithoutUserInput.schema';
import { BillingAddressUncheckedUpdateWithoutUserInputObjectSchema as BillingAddressUncheckedUpdateWithoutUserInputObjectSchema } from './BillingAddressUncheckedUpdateWithoutUserInput.schema';
import { BillingAddressCreateWithoutUserInputObjectSchema as BillingAddressCreateWithoutUserInputObjectSchema } from './BillingAddressCreateWithoutUserInput.schema';
import { BillingAddressUncheckedCreateWithoutUserInputObjectSchema as BillingAddressUncheckedCreateWithoutUserInputObjectSchema } from './BillingAddressUncheckedCreateWithoutUserInput.schema';
import { BillingAddressWhereInputObjectSchema as BillingAddressWhereInputObjectSchema } from './BillingAddressWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BillingAddressUpdateWithoutUserInputObjectSchema), z.lazy(() => BillingAddressUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => BillingAddressCreateWithoutUserInputObjectSchema), z.lazy(() => BillingAddressUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => BillingAddressWhereInputObjectSchema).optional()
}).strict();
export const BillingAddressUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.BillingAddressUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressUpsertWithoutUserInput>;
export const BillingAddressUpsertWithoutUserInputObjectZodSchema = makeSchema();
