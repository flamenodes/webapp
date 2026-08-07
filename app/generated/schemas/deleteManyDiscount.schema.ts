import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './objects/DiscountWhereInput.schema';

export const DiscountDeleteManySchema: z.ZodType<Prisma.DiscountDeleteManyArgs> = z.object({ where: DiscountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiscountDeleteManyArgs>;

export const DiscountDeleteManyZodSchema = z.object({ where: DiscountWhereInputObjectSchema.optional() }).strict();