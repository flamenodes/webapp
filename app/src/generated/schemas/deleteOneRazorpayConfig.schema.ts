import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';

export const RazorpayConfigDeleteOneSchema: z.ZodType<Prisma.RazorpayConfigDeleteArgs> = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  where: RazorpayConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigDeleteArgs>;

export const RazorpayConfigDeleteOneZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();