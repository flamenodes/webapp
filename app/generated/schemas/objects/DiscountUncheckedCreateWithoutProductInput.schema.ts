import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  percentage: z.number().int()
}).strict();
export const DiscountUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountUncheckedCreateWithoutProductInput>;
export const DiscountUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
