import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './objects/DiscountSelect.schema';
import { DiscountIncludeObjectSchema as DiscountIncludeObjectSchema } from './objects/DiscountInclude.schema';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './objects/DiscountWhereUniqueInput.schema';

export const DiscountFindUniqueSchema: z.ZodType<Prisma.DiscountFindUniqueArgs> = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), where: DiscountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiscountFindUniqueArgs>;

export const DiscountFindUniqueZodSchema = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), where: DiscountWhereUniqueInputObjectSchema }).strict();