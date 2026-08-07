import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigUpdateManyMutationInputObjectSchema as RazorpayConfigUpdateManyMutationInputObjectSchema } from './objects/RazorpayConfigUpdateManyMutationInput.schema';
import { RazorpayConfigWhereInputObjectSchema as RazorpayConfigWhereInputObjectSchema } from './objects/RazorpayConfigWhereInput.schema';

export const RazorpayConfigUpdateManyAndReturnSchema: z.ZodType<Prisma.RazorpayConfigUpdateManyAndReturnArgs> = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: RazorpayConfigUpdateManyMutationInputObjectSchema, where: RazorpayConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigUpdateManyAndReturnArgs>;

export const RazorpayConfigUpdateManyAndReturnZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(), data: RazorpayConfigUpdateManyMutationInputObjectSchema, where: RazorpayConfigWhereInputObjectSchema.optional() }).strict();