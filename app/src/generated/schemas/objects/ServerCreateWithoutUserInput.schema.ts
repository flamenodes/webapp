import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrderItemCreateNestedOneWithoutServerInputObjectSchema as OrderItemCreateNestedOneWithoutServerInputObjectSchema } from './OrderItemCreateNestedOneWithoutServerInput.schema';
import { OrderCreateNestedManyWithoutRenewalForServerInputObjectSchema as OrderCreateNestedManyWithoutRenewalForServerInputObjectSchema } from './OrderCreateNestedManyWithoutRenewalForServerInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
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
  orderItem: z.lazy(() => OrderItemCreateNestedOneWithoutServerInputObjectSchema),
  renewals: z.lazy(() => OrderCreateNestedManyWithoutRenewalForServerInputObjectSchema).optional()
}).strict();
export const ServerCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateWithoutUserInput>;
export const ServerCreateWithoutUserInputObjectZodSchema = makeSchema();
