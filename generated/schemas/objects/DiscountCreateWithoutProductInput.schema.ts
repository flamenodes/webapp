import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  percentage: z.number().int()
}).strict();
export const DiscountCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountCreateWithoutProductInput>;
export const DiscountCreateWithoutProductInputObjectZodSchema = makeSchema();
