import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { RazorpayConfigCreateManyInputObjectSchema as RazorpayConfigCreateManyInputObjectSchema } from './objects/RazorpayConfigCreateManyInput.schema';

export const RazorpayConfigCreateManySchema: z.ZodType<Prisma.RazorpayConfigCreateManyArgs> = z.object({ data: z.union([ RazorpayConfigCreateManyInputObjectSchema, z.array(RazorpayConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigCreateManyArgs>;

export const RazorpayConfigCreateManyZodSchema = z.object({ data: z.union([ RazorpayConfigCreateManyInputObjectSchema, z.array(RazorpayConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();