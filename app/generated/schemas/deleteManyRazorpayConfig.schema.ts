import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { RazorpayConfigWhereInputObjectSchema as RazorpayConfigWhereInputObjectSchema } from './objects/RazorpayConfigWhereInput.schema';

export const RazorpayConfigDeleteManySchema: z.ZodType<Prisma.RazorpayConfigDeleteManyArgs> = z.object({ where: RazorpayConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigDeleteManyArgs>;

export const RazorpayConfigDeleteManyZodSchema = z.object({ where: RazorpayConfigWhereInputObjectSchema.optional() }).strict();