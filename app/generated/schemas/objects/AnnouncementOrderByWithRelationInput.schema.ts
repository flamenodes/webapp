import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  expiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AnnouncementOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AnnouncementOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementOrderByWithRelationInput>;
export const AnnouncementOrderByWithRelationInputObjectZodSchema = makeSchema();
