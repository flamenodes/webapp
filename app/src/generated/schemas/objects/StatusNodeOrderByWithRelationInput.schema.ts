import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  ip: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  port: SortOrderSchema.optional(),
  protocol: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  latency: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastChecked: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  cpu: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  disk: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memory: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const StatusNodeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StatusNodeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeOrderByWithRelationInput>;
export const StatusNodeOrderByWithRelationInputObjectZodSchema = makeSchema();
