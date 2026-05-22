import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { DiscountIncludeObjectSchema as DiscountIncludeObjectSchema } from './objects/DiscountInclude.schema';
import { DiscountOrderByWithRelationInputObjectSchema as DiscountOrderByWithRelationInputObjectSchema } from './objects/DiscountOrderByWithRelationInput.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './objects/DiscountWhereInput.schema';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './objects/DiscountWhereUniqueInput.schema';
import { DiscountScalarFieldEnumSchema } from './enums/DiscountScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DiscountFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DiscountSelect> = z.object({
    id: z.boolean().optional(),
    label: z.boolean().optional(),
    percentage: z.boolean().optional(),
    product: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DiscountSelect>;

export const DiscountFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    label: z.boolean().optional(),
    percentage: z.boolean().optional(),
    product: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const DiscountFindFirstOrThrowSchema: z.ZodType<Prisma.DiscountFindFirstOrThrowArgs> = z.object({ select: DiscountFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DiscountIncludeObjectSchema.optional()), orderBy: z.union([DiscountOrderByWithRelationInputObjectSchema, DiscountOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiscountWhereInputObjectSchema.optional(), cursor: DiscountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DiscountScalarFieldEnumSchema, DiscountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DiscountFindFirstOrThrowArgs>;

export const DiscountFindFirstOrThrowZodSchema = z.object({ select: DiscountFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DiscountIncludeObjectSchema.optional()), orderBy: z.union([DiscountOrderByWithRelationInputObjectSchema, DiscountOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiscountWhereInputObjectSchema.optional(), cursor: DiscountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DiscountScalarFieldEnumSchema, DiscountScalarFieldEnumSchema.array()]).optional() }).strict();