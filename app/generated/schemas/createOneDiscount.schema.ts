import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './objects/DiscountSelect.schema';
import { DiscountIncludeObjectSchema as DiscountIncludeObjectSchema } from './objects/DiscountInclude.schema';
import { DiscountCreateInputObjectSchema as DiscountCreateInputObjectSchema } from './objects/DiscountCreateInput.schema';
import { DiscountUncheckedCreateInputObjectSchema as DiscountUncheckedCreateInputObjectSchema } from './objects/DiscountUncheckedCreateInput.schema';

export const DiscountCreateOneSchema: z.ZodType<Prisma.DiscountCreateArgs> = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), data: z.union([DiscountCreateInputObjectSchema, DiscountUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DiscountCreateArgs>;

export const DiscountCreateOneZodSchema = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), data: z.union([DiscountCreateInputObjectSchema, DiscountUncheckedCreateInputObjectSchema]) }).strict();