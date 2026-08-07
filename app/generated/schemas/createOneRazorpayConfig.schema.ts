import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigCreateInputObjectSchema as RazorpayConfigCreateInputObjectSchema } from './objects/RazorpayConfigCreateInput.schema';
import { RazorpayConfigUncheckedCreateInputObjectSchema as RazorpayConfigUncheckedCreateInputObjectSchema } from './objects/RazorpayConfigUncheckedCreateInput.schema';

export const RazorpayConfigCreateOneSchema: z.ZodType<Prisma.RazorpayConfigCreateArgs> = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  data: z.union([RazorpayConfigCreateInputObjectSchema, RazorpayConfigUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigCreateArgs>;

export const RazorpayConfigCreateOneZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  data: z.union([RazorpayConfigCreateInputObjectSchema, RazorpayConfigUncheckedCreateInputObjectSchema]) }).strict();