import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  value: z.union([JsonNullValueInputSchema, jsonSchema]),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const WebSettingsCreateManyInputObjectSchema: z.ZodType<Prisma.WebSettingsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsCreateManyInput>;
export const WebSettingsCreateManyInputObjectZodSchema = makeSchema();
