import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductBillingOptionIncludeObjectSchema as ProductBillingOptionIncludeObjectSchema } from './objects/ProductBillingOptionInclude.schema';
import { ProductBillingOptionOrderByWithRelationInputObjectSchema as ProductBillingOptionOrderByWithRelationInputObjectSchema } from './objects/ProductBillingOptionOrderByWithRelationInput.schema';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './objects/ProductBillingOptionWhereInput.schema';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './objects/ProductBillingOptionWhereUniqueInput.schema';
import { ProductBillingOptionScalarFieldEnumSchema } from './enums/ProductBillingOptionScalarFieldEnum.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './objects/ProductArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductBillingOptionFindFirstSelectSchema: z.ZodType<Prisma.ProductBillingOptionSelect> = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    price: z.boolean().optional(),
    customDays: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionSelect>;

export const ProductBillingOptionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    price: z.boolean().optional(),
    customDays: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
  }).strict();

export const ProductBillingOptionFindFirstSchema: z.ZodType<Prisma.ProductBillingOptionFindFirstArgs> = z.object({ select: ProductBillingOptionFindFirstSelectSchema.optional(), include: z.lazy(() => ProductBillingOptionIncludeObjectSchema.optional()), orderBy: z.union([ProductBillingOptionOrderByWithRelationInputObjectSchema, ProductBillingOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductBillingOptionWhereInputObjectSchema.optional(), cursor: ProductBillingOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductBillingOptionScalarFieldEnumSchema, ProductBillingOptionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductBillingOptionFindFirstArgs>;

export const ProductBillingOptionFindFirstZodSchema = z.object({ select: ProductBillingOptionFindFirstSelectSchema.optional(), include: z.lazy(() => ProductBillingOptionIncludeObjectSchema.optional()), orderBy: z.union([ProductBillingOptionOrderByWithRelationInputObjectSchema, ProductBillingOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductBillingOptionWhereInputObjectSchema.optional(), cursor: ProductBillingOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductBillingOptionScalarFieldEnumSchema, ProductBillingOptionScalarFieldEnumSchema.array()]).optional() }).strict();