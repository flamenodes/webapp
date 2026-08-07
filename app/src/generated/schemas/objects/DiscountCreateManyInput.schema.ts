import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  percentage: z.number().int()
}).strict();
export const DiscountCreateManyInputObjectSchema: z.ZodType<Prisma.DiscountCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountCreateManyInput>;
export const DiscountCreateManyInputObjectZodSchema = makeSchema();
