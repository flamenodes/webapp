import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ConfigurationOptionScalarRelationFilterObjectSchema as ConfigurationOptionScalarRelationFilterObjectSchema } from './ConfigurationOptionScalarRelationFilter.schema';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './ConfigurationOptionWhereInput.schema'

const configurationvaluewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConfigurationValueWhereInputObjectSchema), z.lazy(() => ConfigurationValueWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConfigurationValueWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConfigurationValueWhereInputObjectSchema), z.lazy(() => ConfigurationValueWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  optionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  priceModifier: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  option: z.union([z.lazy(() => ConfigurationOptionScalarRelationFilterObjectSchema), z.lazy(() => ConfigurationOptionWhereInputObjectSchema)]).optional()
}).strict();
export const ConfigurationValueWhereInputObjectSchema: z.ZodType<Prisma.ConfigurationValueWhereInput> = configurationvaluewhereinputSchema as unknown as z.ZodType<Prisma.ConfigurationValueWhereInput>;
export const ConfigurationValueWhereInputObjectZodSchema = configurationvaluewhereinputSchema;
