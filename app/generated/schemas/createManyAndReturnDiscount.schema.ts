import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './objects/DiscountSelect.schema';
import { DiscountCreateManyInputObjectSchema as DiscountCreateManyInputObjectSchema } from './objects/DiscountCreateManyInput.schema';

export const DiscountCreateManyAndReturnSchema: z.ZodType<Prisma.DiscountCreateManyAndReturnArgs> = z.object({ select: DiscountSelectObjectSchema.optional(), data: z.union([ DiscountCreateManyInputObjectSchema, z.array(DiscountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DiscountCreateManyAndReturnArgs>;

export const DiscountCreateManyAndReturnZodSchema = z.object({ select: DiscountSelectObjectSchema.optional(), data: z.union([ DiscountCreateManyInputObjectSchema, z.array(DiscountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();