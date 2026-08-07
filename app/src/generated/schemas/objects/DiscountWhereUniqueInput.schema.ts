import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const DiscountWhereUniqueInputObjectSchema: z.ZodType<Prisma.DiscountWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountWhereUniqueInput>;
export const DiscountWhereUniqueInputObjectZodSchema = makeSchema();
