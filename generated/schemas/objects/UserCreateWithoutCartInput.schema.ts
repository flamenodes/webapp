import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { ServerCreateNestedManyWithoutUserInputObjectSchema as ServerCreateNestedManyWithoutUserInputObjectSchema } from './ServerCreateNestedManyWithoutUserInput.schema';
import { OrderCreateNestedManyWithoutUserInputObjectSchema as OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  clientId: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  displayUsername: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  servers: z.lazy(() => ServerCreateNestedManyWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutCartInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutCartInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutCartInput>;
export const UserCreateWithoutCartInputObjectZodSchema = makeSchema();
