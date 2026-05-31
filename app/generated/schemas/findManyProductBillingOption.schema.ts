import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './objects/ProductBillingOptionInclude.schema';
import { ProductBillingOptionOrderByWithRelationInputObjectSchema as ProductBillingOptionOrderByWithRelationInputObjectSchema } from './objects/ProductBillingOptionOrderByWithRelationInput.schema';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './objects/ProductBillingOptionWhereInput.schema';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './objects/ProductBillingOptionWhereUniqueInput.schema';
import { ProductBillingOptionScalarFieldEnumSchema } from './enums/ProductBillingOptionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductBillingOptionFindManySelectSchema: z.ZodType<Prisma.ProductBillingOptionSelect> = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    price: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionSelect>;

export const ProductBillingOptionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    price: z.boolean().optional()
  }).strict();

export const ProductBillingOptionFindManySchema: z.ZodType<Prisma.ProductBillingOptionFindManyArgs> = z.object({ select: ProductBillingOptionFindManySelectSchema.optional(), include: z.lazy(() => ProductBillingOptionIncludeObjectSchema.optional()), orderBy: z.union([ProductBillingOptionOrderByWithRelationInputObjectSchema, ProductBillingOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductBillingOptionWhereInputObjectSchema.optional(), cursor: ProductBillingOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductBillingOptionScalarFieldEnumSchema, ProductBillingOptionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionFindManyArgs>;

export const ProductBillingOptionFindManyZodSchema = z.object({ select: ProductBillingOptionFindManySelectSchema.optional(), include: z.lazy(() => ProductBillingOptionIncludeObjectSchema.optional()), orderBy: z.union([ProductBillingOptionOrderByWithRelationInputObjectSchema, ProductBillingOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductBillingOptionWhereInputObjectSchema.optional(), cursor: ProductBillingOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductBillingOptionScalarFieldEnumSchema, ProductBillingOptionScalarFieldEnumSchema.array()]).optional() }).strict();