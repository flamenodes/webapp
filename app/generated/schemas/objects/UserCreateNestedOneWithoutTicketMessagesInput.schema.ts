import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { UserCreateWithoutTicketMessagesInputObjectSchema as UserCreateWithoutTicketMessagesInputObjectSchema } from './UserCreateWithoutTicketMessagesInput.schema';
import { UserUncheckedCreateWithoutTicketMessagesInputObjectSchema as UserUncheckedCreateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedCreateWithoutTicketMessagesInput.schema';
import { UserCreateOrConnectWithoutTicketMessagesInputObjectSchema as UserCreateOrConnectWithoutTicketMessagesInputObjectSchema } from './UserCreateOrConnectWithoutTicketMessagesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTicketMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTicketMessagesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTicketMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTicketMessagesInput>;
export const UserCreateNestedOneWithoutTicketMessagesInputObjectZodSchema = makeSchema();
