import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  active: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  expiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  maxUses: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  usedCount: SortOrderSchema.optional()
}).strict();
export const CouponOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CouponOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponOrderByWithRelationInput>;
export const CouponOrderByWithRelationInputObjectZodSchema = makeSchema();
