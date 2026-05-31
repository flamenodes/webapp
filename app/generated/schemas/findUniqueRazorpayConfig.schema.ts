import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';

export const RazorpayConfigFindUniqueSchema: z.ZodType<Prisma.RazorpayConfigFindUniqueArgs> = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  where: RazorpayConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigFindUniqueArgs>;

export const RazorpayConfigFindUniqueZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();