import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';

export const RazorpayConfigFindUniqueOrThrowSchema: z.ZodType<Prisma.RazorpayConfigFindUniqueOrThrowArgs> = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  where: RazorpayConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigFindUniqueOrThrowArgs>;

export const RazorpayConfigFindUniqueOrThrowZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();