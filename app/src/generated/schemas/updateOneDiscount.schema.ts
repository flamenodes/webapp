import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './objects/DiscountSelect.schema';
import { DiscountIncludeObjectSchema as DiscountIncludeObjectSchema } from './objects/DiscountInclude.schema';
import { DiscountUpdateInputObjectSchema as DiscountUpdateInputObjectSchema } from './objects/DiscountUpdateInput.schema';
import { DiscountUncheckedUpdateInputObjectSchema as DiscountUncheckedUpdateInputObjectSchema } from './objects/DiscountUncheckedUpdateInput.schema';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './objects/DiscountWhereUniqueInput.schema';

export const DiscountUpdateOneSchema: z.ZodType<Prisma.DiscountUpdateArgs> = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), data: z.union([DiscountUpdateInputObjectSchema, DiscountUncheckedUpdateInputObjectSchema]), where: DiscountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiscountUpdateArgs>;

export const DiscountUpdateOneZodSchema = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), data: z.union([DiscountUpdateInputObjectSchema, DiscountUncheckedUpdateInputObjectSchema]), where: DiscountWhereUniqueInputObjectSchema }).strict();