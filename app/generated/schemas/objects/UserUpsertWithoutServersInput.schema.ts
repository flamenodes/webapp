import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { UserUpdateWithoutServersInputObjectSchema as UserUpdateWithoutServersInputObjectSchema } from './UserUpdateWithoutServersInput.schema';
import { UserUncheckedUpdateWithoutServersInputObjectSchema as UserUncheckedUpdateWithoutServersInputObjectSchema } from './UserUncheckedUpdateWithoutServersInput.schema';
import { UserCreateWithoutServersInputObjectSchema as UserCreateWithoutServersInputObjectSchema } from './UserCreateWithoutServersInput.schema';
import { UserUncheckedCreateWithoutServersInputObjectSchema as UserUncheckedCreateWithoutServersInputObjectSchema } from './UserUncheckedCreateWithoutServersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutServersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutServersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutServersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutServersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutServersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutServersInput>;
export const UserUpsertWithoutServersInputObjectZodSchema = makeSchema();
