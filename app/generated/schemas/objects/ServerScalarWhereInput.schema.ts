import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const serverscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ServerScalarWhereInputObjectSchema), z.lazy(() => ServerScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServerScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServerScalarWhereInputObjectSchema), z.lazy(() => ServerScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orderItemId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ip: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  port: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  pterodactylServerId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  expiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  resources: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  pterodactylData: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  suspended: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ServerScalarWhereInputObjectSchema: z.ZodType<Prisma.ServerScalarWhereInput> = serverscalarwhereinputSchema as unknown as z.ZodType<Prisma.ServerScalarWhereInput>;
export const ServerScalarWhereInputObjectZodSchema = serverscalarwhereinputSchema;
