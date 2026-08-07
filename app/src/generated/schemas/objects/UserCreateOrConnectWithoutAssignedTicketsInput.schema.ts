import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAssignedTicketsInputObjectSchema as UserCreateWithoutAssignedTicketsInputObjectSchema } from './UserCreateWithoutAssignedTicketsInput.schema';
import { UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema as UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema } from './UserUncheckedCreateWithoutAssignedTicketsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAssignedTicketsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAssignedTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutAssignedTicketsInput>;
export const UserCreateOrConnectWithoutAssignedTicketsInputObjectZodSchema = makeSchema();
