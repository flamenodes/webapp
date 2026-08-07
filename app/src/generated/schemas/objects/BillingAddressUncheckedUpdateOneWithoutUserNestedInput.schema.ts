import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { BillingAddressCreateWithoutUserInputObjectSchema as BillingAddressCreateWithoutUserInputObjectSchema } from './BillingAddressCreateWithoutUserInput.schema';
import { BillingAddressUncheckedCreateWithoutUserInputObjectSchema as BillingAddressUncheckedCreateWithoutUserInputObjectSchema } from './BillingAddressUncheckedCreateWithoutUserInput.schema';
import { BillingAddressCreateOrConnectWithoutUserInputObjectSchema as BillingAddressCreateOrConnectWithoutUserInputObjectSchema } from './BillingAddressCreateOrConnectWithoutUserInput.schema';
import { BillingAddressUpsertWithoutUserInputObjectSchema as BillingAddressUpsertWithoutUserInputObjectSchema } from './BillingAddressUpsertWithoutUserInput.schema';
import { BillingAddressWhereInputObjectSchema as BillingAddressWhereInputObjectSchema } from './BillingAddressWhereInput.schema';
import { BillingAddressWhereUniqueInputObjectSchema as BillingAddressWhereUniqueInputObjectSchema } from './BillingAddressWhereUniqueInput.schema';
import { BillingAddressUpdateToOneWithWhereWithoutUserInputObjectSchema as BillingAddressUpdateToOneWithWhereWithoutUserInputObjectSchema } from './BillingAddressUpdateToOneWithWhereWithoutUserInput.schema';
import { BillingAddressUpdateWithoutUserInputObjectSchema as BillingAddressUpdateWithoutUserInputObjectSchema } from './BillingAddressUpdateWithoutUserInput.schema';
import { BillingAddressUncheckedUpdateWithoutUserInputObjectSchema as BillingAddressUncheckedUpdateWithoutUserInputObjectSchema } from './BillingAddressUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillingAddressCreateWithoutUserInputObjectSchema), z.lazy(() => BillingAddressUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BillingAddressCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => BillingAddressUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => BillingAddressWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => BillingAddressWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => BillingAddressWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BillingAddressUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => BillingAddressUpdateWithoutUserInputObjectSchema), z.lazy(() => BillingAddressUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const BillingAddressUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.BillingAddressUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressUncheckedUpdateOneWithoutUserNestedInput>;
export const BillingAddressUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
