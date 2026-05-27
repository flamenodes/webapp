import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  port: SortOrderSchema.optional()
}).strict();
export const ServerAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServerAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerAvgOrderByAggregateInput>;
export const ServerAvgOrderByAggregateInputObjectZodSchema = makeSchema();
