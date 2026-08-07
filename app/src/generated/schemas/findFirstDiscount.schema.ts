import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { DiscountIncludeObjectSchema as DiscountIncludeObjectSchema } from './objects/DiscountInclude.schema';
import { DiscountOrderByWithRelationInputObjectSchema as DiscountOrderByWithRelationInputObjectSchema } from './objects/DiscountOrderByWithRelationInput.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './objects/DiscountWhereInput.schema';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './objects/DiscountWhereUniqueInput.schema';
import { DiscountScalarFieldEnumSchema } from './enums/DiscountScalarFieldEnum.schema';
import { ProductFindManySchema } from './findManyProduct.schema';
import { DiscountCountOutputTypeArgsObjectSchema as DiscountCountOutputTypeArgsObjectSchema } from './objects/DiscountCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DiscountFindFirstSelectSchema: z.ZodType<Prisma.DiscountSelect> = z.object({
    id: z.boolean().optional(),
    label: z.boolean().optional(),
    percentage: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DiscountCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.DiscountSelect>;

export const DiscountFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    label: z.boolean().optional(),
    percentage: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DiscountCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const DiscountFindFirstSchema: z.ZodType<Prisma.DiscountFindFirstArgs> = z.object({ select: DiscountFindFirstSelectSchema.optional(), include: z.lazy(() => DiscountIncludeObjectSchema.optional()), orderBy: z.union([DiscountOrderByWithRelationInputObjectSchema, DiscountOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiscountWhereInputObjectSchema.optional(), cursor: DiscountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DiscountScalarFieldEnumSchema, DiscountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DiscountFindFirstArgs>;

export const DiscountFindFirstZodSchema = z.object({ select: DiscountFindFirstSelectSchema.optional(), include: z.lazy(() => DiscountIncludeObjectSchema.optional()), orderBy: z.union([DiscountOrderByWithRelationInputObjectSchema, DiscountOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiscountWhereInputObjectSchema.optional(), cursor: DiscountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DiscountScalarFieldEnumSchema, DiscountScalarFieldEnumSchema.array()]).optional() }).strict();