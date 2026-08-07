import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { UserUpdateWithoutBillingAddressInputObjectSchema as UserUpdateWithoutBillingAddressInputObjectSchema } from './UserUpdateWithoutBillingAddressInput.schema';
import { UserUncheckedUpdateWithoutBillingAddressInputObjectSchema as UserUncheckedUpdateWithoutBillingAddressInputObjectSchema } from './UserUncheckedUpdateWithoutBillingAddressInput.schema';
import { UserCreateWithoutBillingAddressInputObjectSchema as UserCreateWithoutBillingAddressInputObjectSchema } from './UserCreateWithoutBillingAddressInput.schema';
import { UserUncheckedCreateWithoutBillingAddressInputObjectSchema as UserUncheckedCreateWithoutBillingAddressInputObjectSchema } from './UserUncheckedCreateWithoutBillingAddressInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBillingAddressInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBillingAddressInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBillingAddressInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBillingAddressInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBillingAddressInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBillingAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBillingAddressInput>;
export const UserUpsertWithoutBillingAddressInputObjectZodSchema = makeSchema();
