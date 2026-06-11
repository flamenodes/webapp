import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { UserCreateNestedOneWithoutServersInputObjectSchema as UserCreateNestedOneWithoutServersInputObjectSchema } from './UserCreateNestedOneWithoutServersInput.schema';
import { OrderItemCreateNestedOneWithoutServerInputObjectSchema as OrderItemCreateNestedOneWithoutServerInputObjectSchema } from './OrderItemCreateNestedOneWithoutServerInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.string(),
  status: z.string(),
  ip: z.string().optional().nullable(),
  port: z.number().int().optional().nullable(),
  pterodactylServerId: z.number().int().optional().nullable(),
  expiresAt: z.coerce.date().optional().nullable(),
  resources: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  pterodactylData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  suspended: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutServersInputObjectSchema),
  orderItem: z.lazy(() => OrderItemCreateNestedOneWithoutServerInputObjectSchema)
}).strict();
export const ServerCreateInputObjectSchema: z.ZodType<Prisma.ServerCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateInput>;
export const ServerCreateInputObjectZodSchema = makeSchema();
