import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrderUncheckedCreateNestedManyWithoutRenewalForServerInputObjectSchema as OrderUncheckedCreateNestedManyWithoutRenewalForServerInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutRenewalForServerInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  orderItemId: z.string().optional().nullable(),
  name: z.string(),
  type: z.string(),
  status: z.string(),
  ip: z.string().optional().nullable(),
  port: z.number().int().optional().nullable(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
  resources: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  pterodactylData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  suspended: z.boolean().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  pterodactylServerId: z.number().int().optional().nullable(),
  renewals: z.lazy(() => OrderUncheckedCreateNestedManyWithoutRenewalForServerInputObjectSchema).optional()
}).strict();
export const ServerUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateInput>;
export const ServerUncheckedCreateInputObjectZodSchema = makeSchema();
