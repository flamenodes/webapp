import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './objects/DiscountSelect.schema';
import { DiscountIncludeObjectSchema as DiscountIncludeObjectSchema } from './objects/DiscountInclude.schema';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './objects/DiscountWhereUniqueInput.schema';

export const DiscountFindUniqueOrThrowSchema: z.ZodType<Prisma.DiscountFindUniqueOrThrowArgs> = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), where: DiscountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiscountFindUniqueOrThrowArgs>;

export const DiscountFindUniqueOrThrowZodSchema = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), where: DiscountWhereUniqueInputObjectSchema }).strict();