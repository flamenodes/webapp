import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  port: SortOrderSchema.optional(),
  pterodactylServerId: SortOrderSchema.optional()
}).strict();
export const ServerSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServerSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerSumOrderByAggregateInput>;
export const ServerSumOrderByAggregateInputObjectZodSchema = makeSchema();
