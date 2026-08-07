import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  orderItemId: z.string(),
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
  updatedAt: z.coerce.date().optional()
}).strict();
export const ServerUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateWithoutUserInput>;
export const ServerUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
