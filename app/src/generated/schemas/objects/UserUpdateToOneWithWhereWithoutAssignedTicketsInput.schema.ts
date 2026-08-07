import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutAssignedTicketsInputObjectSchema as UserUpdateWithoutAssignedTicketsInputObjectSchema } from './UserUpdateWithoutAssignedTicketsInput.schema';
import { UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema as UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema } from './UserUncheckedUpdateWithoutAssignedTicketsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutAssignedTicketsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAssignedTicketsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAssignedTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAssignedTicketsInput>;
export const UserUpdateToOneWithWhereWithoutAssignedTicketsInputObjectZodSchema = makeSchema();
