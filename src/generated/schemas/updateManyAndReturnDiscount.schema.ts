import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './objects/DiscountSelect.schema';
import { DiscountUpdateManyMutationInputObjectSchema as DiscountUpdateManyMutationInputObjectSchema } from './objects/DiscountUpdateManyMutationInput.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './objects/DiscountWhereInput.schema';

export const DiscountUpdateManyAndReturnSchema: z.ZodType<Prisma.DiscountUpdateManyAndReturnArgs> = z.object({ select: DiscountSelectObjectSchema.optional(), data: DiscountUpdateManyMutationInputObjectSchema, where: DiscountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiscountUpdateManyAndReturnArgs>;

export const DiscountUpdateManyAndReturnZodSchema = z.object({ select: DiscountSelectObjectSchema.optional(), data: DiscountUpdateManyMutationInputObjectSchema, where: DiscountWhereInputObjectSchema.optional() }).strict();