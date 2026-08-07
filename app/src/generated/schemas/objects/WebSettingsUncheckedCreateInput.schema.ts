import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  value: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const WebSettingsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WebSettingsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsUncheckedCreateInput>;
export const WebSettingsUncheckedCreateInputObjectZodSchema = makeSchema();
