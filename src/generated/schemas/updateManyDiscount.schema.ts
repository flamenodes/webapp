import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { DiscountUpdateManyMutationInputObjectSchema as DiscountUpdateManyMutationInputObjectSchema } from './objects/DiscountUpdateManyMutationInput.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './objects/DiscountWhereInput.schema';

export const DiscountUpdateManySchema: z.ZodType<Prisma.DiscountUpdateManyArgs> = z.object({ data: DiscountUpdateManyMutationInputObjectSchema, where: DiscountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiscountUpdateManyArgs>;

export const DiscountUpdateManyZodSchema = z.object({ data: DiscountUpdateManyMutationInputObjectSchema, where: DiscountWhereInputObjectSchema.optional() }).strict();