import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTicketMessagesInputObjectSchema as UserUpdateWithoutTicketMessagesInputObjectSchema } from './UserUpdateWithoutTicketMessagesInput.schema';
import { UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema as UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedUpdateWithoutTicketMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTicketMessagesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTicketMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTicketMessagesInput>;
export const UserUpdateToOneWithWhereWithoutTicketMessagesInputObjectZodSchema = makeSchema();
