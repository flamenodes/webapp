import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  value: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.coerce.date().optional()
}).strict();
export const WebSettingsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WebSettingsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsUncheckedCreateInput>;
export const WebSettingsUncheckedCreateInputObjectZodSchema = makeSchema();
