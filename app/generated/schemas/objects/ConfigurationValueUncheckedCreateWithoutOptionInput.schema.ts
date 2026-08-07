import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueUncheckedCreateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueUncheckedCreateWithoutOptionInput>;
export const ConfigurationValueUncheckedCreateWithoutOptionInputObjectZodSchema = makeSchema();
