import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { PageStatusSchema } from '../enums/PageStatus.schema'

const nestedenumpagestatusfilterSchema = z.object({
  equals: PageStatusSchema.optional(),
  in: PageStatusSchema.array().optional(),
  notIn: PageStatusSchema.array().optional(),
  not: z.union([PageStatusSchema, z.lazy(() => NestedEnumPageStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumPageStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumPageStatusFilter> = nestedenumpagestatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumPageStatusFilter>;
export const NestedEnumPageStatusFilterObjectZodSchema = nestedenumpagestatusfilterSchema;
