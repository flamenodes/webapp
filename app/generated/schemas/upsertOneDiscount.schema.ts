import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './objects/DiscountSelect.schema';
import { DiscountIncludeObjectSchema as DiscountIncludeObjectSchema } from './objects/DiscountInclude.schema';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './objects/DiscountWhereUniqueInput.schema';
import { DiscountCreateInputObjectSchema as DiscountCreateInputObjectSchema } from './objects/DiscountCreateInput.schema';
import { DiscountUncheckedCreateInputObjectSchema as DiscountUncheckedCreateInputObjectSchema } from './objects/DiscountUncheckedCreateInput.schema';
import { DiscountUpdateInputObjectSchema as DiscountUpdateInputObjectSchema } from './objects/DiscountUpdateInput.schema';
import { DiscountUncheckedUpdateInputObjectSchema as DiscountUncheckedUpdateInputObjectSchema } from './objects/DiscountUncheckedUpdateInput.schema';

export const DiscountUpsertOneSchema: z.ZodType<Prisma.DiscountUpsertArgs> = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), where: DiscountWhereUniqueInputObjectSchema, create: z.union([ DiscountCreateInputObjectSchema, DiscountUncheckedCreateInputObjectSchema ]), update: z.union([ DiscountUpdateInputObjectSchema, DiscountUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DiscountUpsertArgs>;

export const DiscountUpsertOneZodSchema = z.object({ select: DiscountSelectObjectSchema.optional(), include: DiscountIncludeObjectSchema.optional(), where: DiscountWhereUniqueInputObjectSchema, create: z.union([ DiscountCreateInputObjectSchema, DiscountUncheckedCreateInputObjectSchema ]), update: z.union([ DiscountUpdateInputObjectSchema, DiscountUncheckedUpdateInputObjectSchema ]) }).strict();