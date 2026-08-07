import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigCreateManyInputObjectSchema as RazorpayConfigCreateManyInputObjectSchema } from './objects/RazorpayConfigCreateManyInput.schema';

export const RazorpayConfigCreateManyAndReturnSchema: z.ZodType<Prisma.RazorpayConfigCreateManyAndReturnArgs> = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: z.union([ RazorpayConfigCreateManyInputObjectSchema, z.array(RazorpayConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigCreateManyAndReturnArgs>;

export const RazorpayConfigCreateManyAndReturnZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: z.union([ RazorpayConfigCreateManyInputObjectSchema, z.array(RazorpayConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();