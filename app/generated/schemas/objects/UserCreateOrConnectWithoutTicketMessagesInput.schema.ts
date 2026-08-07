import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTicketMessagesInputObjectSchema as UserCreateWithoutTicketMessagesInputObjectSchema } from './UserCreateWithoutTicketMessagesInput.schema';
import { UserUncheckedCreateWithoutTicketMessagesInputObjectSchema as UserUncheckedCreateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedCreateWithoutTicketMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketMessagesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTicketMessagesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTicketMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTicketMessagesInput>;
export const UserCreateOrConnectWithoutTicketMessagesInputObjectZodSchema = makeSchema();
