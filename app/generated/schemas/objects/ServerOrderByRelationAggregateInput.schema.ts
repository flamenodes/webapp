import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ServerOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ServerOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerOrderByRelationAggregateInput>;
export const ServerOrderByRelationAggregateInputObjectZodSchema = makeSchema();
