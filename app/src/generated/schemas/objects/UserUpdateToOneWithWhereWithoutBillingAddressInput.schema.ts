import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBillingAddressInputObjectSchema as UserUpdateWithoutBillingAddressInputObjectSchema } from './UserUpdateWithoutBillingAddressInput.schema';
import { UserUncheckedUpdateWithoutBillingAddressInputObjectSchema as UserUncheckedUpdateWithoutBillingAddressInputObjectSchema } from './UserUncheckedUpdateWithoutBillingAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBillingAddressInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBillingAddressInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBillingAddressInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBillingAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBillingAddressInput>;
export const UserUpdateToOneWithWhereWithoutBillingAddressInputObjectZodSchema = makeSchema();
