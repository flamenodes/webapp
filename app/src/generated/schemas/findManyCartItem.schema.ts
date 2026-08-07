import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { CartItemIncludeObjectSchema as CartItemIncludeObjectSchema } from './objects/CartItemInclude.schema';
import { CartItemOrderByWithRelationInputObjectSchema as CartItemOrderByWithRelationInputObjectSchema } from './objects/CartItemOrderByWithRelationInput.schema';
import { CartItemWhereInputObjectSchema as CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './objects/CartItemWhereUniqueInput.schema';
import { CartItemScalarFieldEnumSchema } from './enums/CartItemScalarFieldEnum.schema';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './objects/CartArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './objects/ProductArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CartItemFindManySelectSchema: z.ZodType<Prisma.CartItemSelect> = z.object({
    id: z.boolean().optional(),
    cartId: z.boolean().optional(),
    productId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    configuration: z.boolean().optional(),
    cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CartItemSelect>;

export const CartItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    cartId: z.boolean().optional(),
    productId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    configuration: z.boolean().optional(),
    cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const CartItemFindManySchema: z.ZodType<Prisma.CartItemFindManyArgs> = z.object({ select: CartItemFindManySelectSchema.optional(), include: z.lazy(() => CartItemIncludeObjectSchema.optional()), orderBy: z.union([CartItemOrderByWithRelationInputObjectSchema, CartItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: CartItemWhereInputObjectSchema.optional(), cursor: CartItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CartItemScalarFieldEnumSchema, CartItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CartItemFindManyArgs>;

export const CartItemFindManyZodSchema = z.object({ select: CartItemFindManySelectSchema.optional(), include: z.lazy(() => CartItemIncludeObjectSchema.optional()), orderBy: z.union([CartItemOrderByWithRelationInputObjectSchema, CartItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: CartItemWhereInputObjectSchema.optional(), cursor: CartItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CartItemScalarFieldEnumSchema, CartItemScalarFieldEnumSchema.array()]).optional() }).strict();