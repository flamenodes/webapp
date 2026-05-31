import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const configurationvaluescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConfigurationValueScalarWhereInputObjectSchema), z.lazy(() => ConfigurationValueScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConfigurationValueScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConfigurationValueScalarWhereInputObjectSchema), z.lazy(() => ConfigurationValueScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  optionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  priceModifier: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ConfigurationValueScalarWhereInputObjectSchema: z.ZodType<Prisma.ConfigurationValueScalarWhereInput> = configurationvaluescalarwhereinputSchema as unknown as z.ZodType<Prisma.ConfigurationValueScalarWhereInput>;
export const ConfigurationValueScalarWhereInputObjectZodSchema = configurationvaluescalarwhereinputSchema;
