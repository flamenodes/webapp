import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  type: z.string().optional(),
  title: z.string(),
  message: z.string(),
  read: z.boolean().optional(),
  link: z.string().optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const NotificationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.NotificationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUncheckedCreateInput>;
export const NotificationUncheckedCreateInputObjectZodSchema = makeSchema();
