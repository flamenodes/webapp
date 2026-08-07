import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserCreateWithoutServersInputObjectSchema as UserCreateWithoutServersInputObjectSchema } from './UserCreateWithoutServersInput.schema';
import { UserUncheckedCreateWithoutServersInputObjectSchema as UserUncheckedCreateWithoutServersInputObjectSchema } from './UserUncheckedCreateWithoutServersInput.schema';
import { UserCreateOrConnectWithoutServersInputObjectSchema as UserCreateOrConnectWithoutServersInputObjectSchema } from './UserCreateOrConnectWithoutServersInput.schema';
import { UserUpsertWithoutServersInputObjectSchema as UserUpsertWithoutServersInputObjectSchema } from './UserUpsertWithoutServersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutServersInputObjectSchema as UserUpdateToOneWithWhereWithoutServersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutServersInput.schema';
import { UserUpdateWithoutServersInputObjectSchema as UserUpdateWithoutServersInputObjectSchema } from './UserUpdateWithoutServersInput.schema';
import { UserUncheckedUpdateWithoutServersInputObjectSchema as UserUncheckedUpdateWithoutServersInputObjectSchema } from './UserUncheckedUpdateWithoutServersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutServersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutServersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutServersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutServersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutServersInputObjectSchema), z.lazy(() => UserUpdateWithoutServersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutServersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutServersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutServersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutServersNestedInput>;
export const UserUpdateOneRequiredWithoutServersNestedInputObjectZodSchema = makeSchema();
