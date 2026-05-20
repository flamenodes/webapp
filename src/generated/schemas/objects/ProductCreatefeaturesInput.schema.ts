import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ProductCreatefeaturesInputObjectSchema: z.ZodType<Prisma.ProductCreatefeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreatefeaturesInput>;
export const ProductCreatefeaturesInputObjectZodSchema = makeSchema();
