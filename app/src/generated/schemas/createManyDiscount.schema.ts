import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { DiscountCreateManyInputObjectSchema as DiscountCreateManyInputObjectSchema } from './objects/DiscountCreateManyInput.schema';

export const DiscountCreateManySchema: z.ZodType<Prisma.DiscountCreateManyArgs> = z.object({ data: z.union([ DiscountCreateManyInputObjectSchema, z.array(DiscountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DiscountCreateManyArgs>;

export const DiscountCreateManyZodSchema = z.object({ data: z.union([ DiscountCreateManyInputObjectSchema, z.array(DiscountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();