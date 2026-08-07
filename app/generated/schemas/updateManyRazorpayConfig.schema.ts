import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { RazorpayConfigUpdateManyMutationInputObjectSchema as RazorpayConfigUpdateManyMutationInputObjectSchema } from './objects/RazorpayConfigUpdateManyMutationInput.schema';
import { RazorpayConfigWhereInputObjectSchema as RazorpayConfigWhereInputObjectSchema } from './objects/RazorpayConfigWhereInput.schema';

export const RazorpayConfigUpdateManySchema: z.ZodType<Prisma.RazorpayConfigUpdateManyArgs> = z.object({ data: RazorpayConfigUpdateManyMutationInputObjectSchema, where: RazorpayConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigUpdateManyArgs>;

export const RazorpayConfigUpdateManyZodSchema = z.object({ data: RazorpayConfigUpdateManyMutationInputObjectSchema, where: RazorpayConfigWhereInputObjectSchema.optional() }).strict();