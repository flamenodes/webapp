import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const OrderWhereUniqueInputObjectSchema: z.ZodType<Prisma.OrderWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderWhereUniqueInput>;
export const OrderWhereUniqueInputObjectZodSchema = makeSchema();
