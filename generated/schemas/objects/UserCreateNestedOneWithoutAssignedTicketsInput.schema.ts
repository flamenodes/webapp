import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { UserCreateWithoutAssignedTicketsInputObjectSchema as UserCreateWithoutAssignedTicketsInputObjectSchema } from './UserCreateWithoutAssignedTicketsInput.schema';
import { UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema as UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema } from './UserUncheckedCreateWithoutAssignedTicketsInput.schema';
import { UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema as UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema } from './UserCreateOrConnectWithoutAssignedTicketsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAssignedTicketsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAssignedTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutAssignedTicketsInput>;
export const UserCreateNestedOneWithoutAssignedTicketsInputObjectZodSchema = makeSchema();
