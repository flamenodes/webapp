import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductCategoryConfigOrderByWithRelationInputObjectSchema as ProductCategoryConfigOrderByWithRelationInputObjectSchema } from './objects/ProductCategoryConfigOrderByWithRelationInput.schema';
import { ProductCategoryConfigWhereInputObjectSchema as ProductCategoryConfigWhereInputObjectSchema } from './objects/ProductCategoryConfigWhereInput.schema';
import { ProductCategoryConfigWhereUniqueInputObjectSchema as ProductCategoryConfigWhereUniqueInputObjectSchema } from './objects/ProductCategoryConfigWhereUniqueInput.schema';
import { ProductCategoryConfigScalarFieldEnumSchema } from './enums/ProductCategoryConfigScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductCategoryConfigFindManySelectSchema: z.ZodType<Prisma.ProductCategoryConfigSelect> = z.object({
    id: z.boolean().optional(),
    category: z.boolean().optional(),
    billingPeriods: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigSelect>;

export const ProductCategoryConfigFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    category: z.boolean().optional(),
    billingPeriods: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ProductCategoryConfigFindManySchema: z.ZodType<Prisma.ProductCategoryConfigFindManyArgs> = z.object({ select: ProductCategoryConfigFindManySelectSchema.optional(),  orderBy: z.union([ProductCategoryConfigOrderByWithRelationInputObjectSchema, ProductCategoryConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductCategoryConfigWhereInputObjectSchema.optional(), cursor: ProductCategoryConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductCategoryConfigScalarFieldEnumSchema, ProductCategoryConfigScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigFindManyArgs>;

export const ProductCategoryConfigFindManyZodSchema = z.object({ select: ProductCategoryConfigFindManySelectSchema.optional(),  orderBy: z.union([ProductCategoryConfigOrderByWithRelationInputObjectSchema, ProductCategoryConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductCategoryConfigWhereInputObjectSchema.optional(), cursor: ProductCategoryConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductCategoryConfigScalarFieldEnumSchema, ProductCategoryConfigScalarFieldEnumSchema.array()]).optional() }).strict();