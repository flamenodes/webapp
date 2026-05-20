import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { SessionListRelationFilterObjectSchema as SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { AccountListRelationFilterObjectSchema as AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { ServerListRelationFilterObjectSchema as ServerListRelationFilterObjectSchema } from './ServerListRelationFilter.schema';
import { CartNullableScalarRelationFilterObjectSchema as CartNullableScalarRelationFilterObjectSchema } from './CartNullableScalarRelationFilter.schema';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema';
import { OrderListRelationFilterObjectSchema as OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  role: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  banned: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  banReason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  banExpires: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional().nullable(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstname: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastname: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  displayUsername: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  servers: z.lazy(() => ServerListRelationFilterObjectSchema).optional(),
  cart: z.union([z.lazy(() => CartNullableScalarRelationFilterObjectSchema), z.lazy(() => CartWhereInputObjectSchema)]).optional(),
  orders: z.lazy(() => OrderListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
