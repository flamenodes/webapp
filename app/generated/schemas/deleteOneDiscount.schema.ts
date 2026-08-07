import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './objects/DiscountSelect.schema';
import { DiscountIncludeObjectSchema as DiscountIncludeObjectSchema } from './objects/DiscountInclude.schema';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './objects/DiscountWhereUniqueInput.schema';

export const DiscountDeleteOneSchema: z.ZodType<Prisma.DiscountDeleteArgs> = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), where: DiscountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiscountDeleteArgs>;

export const DiscountDeleteOneZodSchema = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), where: DiscountWhereUniqueInputObjectSchema }).strict();