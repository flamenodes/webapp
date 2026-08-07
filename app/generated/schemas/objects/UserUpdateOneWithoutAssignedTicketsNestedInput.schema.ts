import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { UserCreateWithoutAssignedTicketsInputObjectSchema as UserCreateWithoutAssignedTicketsInputObjectSchema } from './UserCreateWithoutAssignedTicketsInput.schema';
import { UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema as UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema } from './UserUncheckedCreateWithoutAssignedTicketsInput.schema';
import { UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema as UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema } from './UserCreateOrConnectWithoutAssignedTicketsInput.schema';
import { UserUpsertWithoutAssignedTicketsInputObjectSchema as UserUpsertWithoutAssignedTicketsInputObjectSchema } from './UserUpsertWithoutAssignedTicketsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAssignedTicketsInputObjectSchema as UserUpdateToOneWithWhereWithoutAssignedTicketsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAssignedTicketsInput.schema';
import { UserUpdateWithoutAssignedTicketsInputObjectSchema as UserUpdateWithoutAssignedTicketsInputObjectSchema } from './UserUpdateWithoutAssignedTicketsInput.schema';
import { UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema as UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema } from './UserUncheckedUpdateWithoutAssignedTicketsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAssignedTicketsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAssignedTicketsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAssignedTicketsInputObjectSchema), z.lazy(() => UserUpdateWithoutAssignedTicketsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutAssignedTicketsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutAssignedTicketsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutAssignedTicketsNestedInput>;
export const UserUpdateOneWithoutAssignedTicketsNestedInputObjectZodSchema = makeSchema();
