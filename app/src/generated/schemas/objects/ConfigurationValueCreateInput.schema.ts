import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ConfigurationOptionCreateNestedOneWithoutValuesInputObjectSchema as ConfigurationOptionCreateNestedOneWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateNestedOneWithoutValuesInput.schema'

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
  option: z.lazy(() => ConfigurationOptionCreateNestedOneWithoutValuesInputObjectSchema)
}).strict();
export const ConfigurationValueCreateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueCreateInput>;
export const ConfigurationValueCreateInputObjectZodSchema = makeSchema();
