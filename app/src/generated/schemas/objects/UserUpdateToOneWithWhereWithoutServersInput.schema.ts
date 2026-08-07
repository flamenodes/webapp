import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutServersInputObjectSchema as UserUpdateWithoutServersInputObjectSchema } from './UserUpdateWithoutServersInput.schema';
import { UserUncheckedUpdateWithoutServersInputObjectSchema as UserUncheckedUpdateWithoutServersInputObjectSchema } from './UserUncheckedUpdateWithoutServersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutServersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutServersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutServersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutServersInput>;
export const UserUpdateToOneWithWhereWithoutServersInputObjectZodSchema = makeSchema();
