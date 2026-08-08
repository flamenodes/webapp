import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrderUncheckedCreateNestedManyWithoutRenewalForServerInputObjectSchema as OrderUncheckedCreateNestedManyWithoutRenewalForServerInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutRenewalForServerInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  orderItemId: z.string(),
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
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  pterodactylServerId: z.number().int().optional().nullable(),
  renewals: z.lazy(() => OrderUncheckedCreateNestedManyWithoutRenewalForServerInputObjectSchema).optional()
}).strict();
export const ServerUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateWithoutUserInput>;
export const ServerUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
