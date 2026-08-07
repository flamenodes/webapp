import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBillingAddressInputObjectSchema as UserCreateWithoutBillingAddressInputObjectSchema } from './UserCreateWithoutBillingAddressInput.schema';
import { UserUncheckedCreateWithoutBillingAddressInputObjectSchema as UserUncheckedCreateWithoutBillingAddressInputObjectSchema } from './UserUncheckedCreateWithoutBillingAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBillingAddressInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBillingAddressInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBillingAddressInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBillingAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBillingAddressInput>;
export const UserCreateOrConnectWithoutBillingAddressInputObjectZodSchema = makeSchema();
