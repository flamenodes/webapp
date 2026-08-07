import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigUpdateInputObjectSchema as RazorpayConfigUpdateInputObjectSchema } from './objects/RazorpayConfigUpdateInput.schema';
import { RazorpayConfigUncheckedUpdateInputObjectSchema as RazorpayConfigUncheckedUpdateInputObjectSchema } from './objects/RazorpayConfigUncheckedUpdateInput.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';

export const RazorpayConfigUpdateOneSchema: z.ZodType<Prisma.RazorpayConfigUpdateArgs> = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  data: z.union([RazorpayConfigUpdateInputObjectSchema, RazorpayConfigUncheckedUpdateInputObjectSchema]), where: RazorpayConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigUpdateArgs>;

export const RazorpayConfigUpdateOneZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  data: z.union([RazorpayConfigUpdateInputObjectSchema, RazorpayConfigUncheckedUpdateInputObjectSchema]), where: RazorpayConfigWhereUniqueInputObjectSchema }).strict();