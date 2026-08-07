import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { BillingAddressWhereUniqueInputObjectSchema as BillingAddressWhereUniqueInputObjectSchema } from './BillingAddressWhereUniqueInput.schema';
import { BillingAddressCreateWithoutUserInputObjectSchema as BillingAddressCreateWithoutUserInputObjectSchema } from './BillingAddressCreateWithoutUserInput.schema';
import { BillingAddressUncheckedCreateWithoutUserInputObjectSchema as BillingAddressUncheckedCreateWithoutUserInputObjectSchema } from './BillingAddressUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillingAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BillingAddressCreateWithoutUserInputObjectSchema), z.lazy(() => BillingAddressUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BillingAddressCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.BillingAddressCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressCreateOrConnectWithoutUserInput>;
export const BillingAddressCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
