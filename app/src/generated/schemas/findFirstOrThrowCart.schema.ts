import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { CartIncludeObjectSchema as CartIncludeObjectSchema } from './objects/CartInclude.schema';
import { CartOrderByWithRelationInputObjectSchema as CartOrderByWithRelationInputObjectSchema } from './objects/CartOrderByWithRelationInput.schema';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './objects/CartWhereInput.schema';
import { CartWhereUniqueInputObjectSchema as CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';
import { CartScalarFieldEnumSchema } from './enums/CartScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { CartItemFindManySchema } from './findManyCartItem.schema';
import { CartCountOutputTypeArgsObjectSchema as CartCountOutputTypeArgsObjectSchema } from './objects/CartCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CartFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CartSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    items: z.union([z.boolean(), z.lazy(() => CartItemFindManySchema)]).optional(),
    couponCode: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => CartCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.CartSelect>;

export const CartFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    items: z.union([z.boolean(), z.lazy(() => CartItemFindManySchema)]).optional(),
    couponCode: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => CartCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const CartFindFirstOrThrowSchema: z.ZodType<Prisma.CartFindFirstOrThrowArgs> = z.object({ select: CartFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CartIncludeObjectSchema.optional()), orderBy: z.union([CartOrderByWithRelationInputObjectSchema, CartOrderByWithRelationInputObjectSchema.array()]).optional(), where: CartWhereInputObjectSchema.optional(), cursor: CartWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CartScalarFieldEnumSchema, CartScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CartFindFirstOrThrowArgs>;

export const CartFindFirstOrThrowZodSchema = z.object({ select: CartFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CartIncludeObjectSchema.optional()), orderBy: z.union([CartOrderByWithRelationInputObjectSchema, CartOrderByWithRelationInputObjectSchema.array()]).optional(), where: CartWhereInputObjectSchema.optional(), cursor: CartWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CartScalarFieldEnumSchema, CartScalarFieldEnumSchema.array()]).optional() }).strict();