import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { UserCreateWithoutBillingAddressInputObjectSchema as UserCreateWithoutBillingAddressInputObjectSchema } from './UserCreateWithoutBillingAddressInput.schema';
import { UserUncheckedCreateWithoutBillingAddressInputObjectSchema as UserUncheckedCreateWithoutBillingAddressInputObjectSchema } from './UserUncheckedCreateWithoutBillingAddressInput.schema';
import { UserCreateOrConnectWithoutBillingAddressInputObjectSchema as UserCreateOrConnectWithoutBillingAddressInputObjectSchema } from './UserCreateOrConnectWithoutBillingAddressInput.schema';
import { UserUpsertWithoutBillingAddressInputObjectSchema as UserUpsertWithoutBillingAddressInputObjectSchema } from './UserUpsertWithoutBillingAddressInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBillingAddressInputObjectSchema as UserUpdateToOneWithWhereWithoutBillingAddressInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBillingAddressInput.schema';
import { UserUpdateWithoutBillingAddressInputObjectSchema as UserUpdateWithoutBillingAddressInputObjectSchema } from './UserUpdateWithoutBillingAddressInput.schema';
import { UserUncheckedUpdateWithoutBillingAddressInputObjectSchema as UserUncheckedUpdateWithoutBillingAddressInputObjectSchema } from './UserUncheckedUpdateWithoutBillingAddressInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBillingAddressInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBillingAddressInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBillingAddressInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBillingAddressInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBillingAddressInputObjectSchema), z.lazy(() => UserUpdateWithoutBillingAddressInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBillingAddressInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutBillingAddressNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBillingAddressNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutBillingAddressNestedInput>;
export const UserUpdateOneRequiredWithoutBillingAddressNestedInputObjectZodSchema = makeSchema();
