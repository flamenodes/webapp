import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  value: z.string(),
  description: z.string().optional().nullable(),
  priceModifier: z.number().int().optional(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueUncheckedCreateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueUncheckedCreateWithoutOptionInput>;
export const ConfigurationValueUncheckedCreateWithoutOptionInputObjectZodSchema = makeSchema();
