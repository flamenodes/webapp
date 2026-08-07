import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { BillingAddressCreateWithoutUserInputObjectSchema as BillingAddressCreateWithoutUserInputObjectSchema } from './BillingAddressCreateWithoutUserInput.schema';
import { BillingAddressUncheckedCreateWithoutUserInputObjectSchema as BillingAddressUncheckedCreateWithoutUserInputObjectSchema } from './BillingAddressUncheckedCreateWithoutUserInput.schema';
import { BillingAddressCreateOrConnectWithoutUserInputObjectSchema as BillingAddressCreateOrConnectWithoutUserInputObjectSchema } from './BillingAddressCreateOrConnectWithoutUserInput.schema';
import { BillingAddressWhereUniqueInputObjectSchema as BillingAddressWhereUniqueInputObjectSchema } from './BillingAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillingAddressCreateWithoutUserInputObjectSchema), z.lazy(() => BillingAddressUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BillingAddressCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => BillingAddressWhereUniqueInputObjectSchema).optional()
}).strict();
export const BillingAddressUncheckedCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.BillingAddressUncheckedCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressUncheckedCreateNestedOneWithoutUserInput>;
export const BillingAddressUncheckedCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
