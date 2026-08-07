import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserCreateWithoutBillingAddressInputObjectSchema as UserCreateWithoutBillingAddressInputObjectSchema } from './UserCreateWithoutBillingAddressInput.schema';
import { UserUncheckedCreateWithoutBillingAddressInputObjectSchema as UserUncheckedCreateWithoutBillingAddressInputObjectSchema } from './UserUncheckedCreateWithoutBillingAddressInput.schema';
import { UserCreateOrConnectWithoutBillingAddressInputObjectSchema as UserCreateOrConnectWithoutBillingAddressInputObjectSchema } from './UserCreateOrConnectWithoutBillingAddressInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBillingAddressInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBillingAddressInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBillingAddressInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBillingAddressInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBillingAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBillingAddressInput>;
export const UserCreateNestedOneWithoutBillingAddressInputObjectZodSchema = makeSchema();
