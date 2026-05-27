import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { UserUpdateWithoutTicketMessagesInputObjectSchema as UserUpdateWithoutTicketMessagesInputObjectSchema } from './UserUpdateWithoutTicketMessagesInput.schema';
import { UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema as UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedUpdateWithoutTicketMessagesInput.schema';
import { UserCreateWithoutTicketMessagesInputObjectSchema as UserCreateWithoutTicketMessagesInputObjectSchema } from './UserCreateWithoutTicketMessagesInput.schema';
import { UserUncheckedCreateWithoutTicketMessagesInputObjectSchema as UserUncheckedCreateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedCreateWithoutTicketMessagesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketMessagesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTicketMessagesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTicketMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTicketMessagesInput>;
export const UserUpsertWithoutTicketMessagesInputObjectZodSchema = makeSchema();
