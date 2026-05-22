import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutServersInputObjectSchema as UserCreateWithoutServersInputObjectSchema } from './UserCreateWithoutServersInput.schema';
import { UserUncheckedCreateWithoutServersInputObjectSchema as UserUncheckedCreateWithoutServersInputObjectSchema } from './UserUncheckedCreateWithoutServersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutServersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutServersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutServersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutServersInput>;
export const UserCreateOrConnectWithoutServersInputObjectZodSchema = makeSchema();
