import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserCreateWithoutServersInputObjectSchema as UserCreateWithoutServersInputObjectSchema } from './UserCreateWithoutServersInput.schema';
import { UserUncheckedCreateWithoutServersInputObjectSchema as UserUncheckedCreateWithoutServersInputObjectSchema } from './UserUncheckedCreateWithoutServersInput.schema';
import { UserCreateOrConnectWithoutServersInputObjectSchema as UserCreateOrConnectWithoutServersInputObjectSchema } from './UserCreateOrConnectWithoutServersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutServersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutServersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutServersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutServersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutServersInput>;
export const UserCreateNestedOneWithoutServersInputObjectZodSchema = makeSchema();
