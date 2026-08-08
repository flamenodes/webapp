import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { OrderItemIncludeObjectSchema as OrderItemIncludeObjectSchema } from './objects/OrderItemInclude.schema';
import { OrderItemOrderByWithRelationInputObjectSchema as OrderItemOrderByWithRelationInputObjectSchema } from './objects/OrderItemOrderByWithRelationInput.schema';
import { OrderItemWhereInputObjectSchema as OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';
import { OrderItemScalarFieldEnumSchema } from './enums/OrderItemScalarFieldEnum.schema';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './objects/OrderArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './objects/ProductArgs.schema';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './objects/ServerArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrderItemFindFirstSelectSchema: z.ZodType<Prisma.OrderItemSelect> = z.object({
    id: z.boolean().optional(),
    orderId: z.boolean().optional(),
    productId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    productName: z.boolean().optional(),
    specsSnapshot: z.boolean().optional(),
    totalPrice: z.boolean().optional(),
    unitPrice: z.boolean().optional(),
    configuration: z.boolean().optional(),
    order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
    server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.OrderItemSelect>;

export const OrderItemFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    orderId: z.boolean().optional(),
    productId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    productName: z.boolean().optional(),
    specsSnapshot: z.boolean().optional(),
    totalPrice: z.boolean().optional(),
    unitPrice: z.boolean().optional(),
    configuration: z.boolean().optional(),
    order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
    server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional()
  }).strict();

export const OrderItemFindFirstSchema: z.ZodType<Prisma.OrderItemFindFirstArgs> = z.object({ select: OrderItemFindFirstSelectSchema.optional(), include: z.lazy(() => OrderItemIncludeObjectSchema.optional()), orderBy: z.union([OrderItemOrderByWithRelationInputObjectSchema, OrderItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrderItemWhereInputObjectSchema.optional(), cursor: OrderItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrderItemScalarFieldEnumSchema, OrderItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OrderItemFindFirstArgs>;

export const OrderItemFindFirstZodSchema = z.object({ select: OrderItemFindFirstSelectSchema.optional(), include: z.lazy(() => OrderItemIncludeObjectSchema.optional()), orderBy: z.union([OrderItemOrderByWithRelationInputObjectSchema, OrderItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrderItemWhereInputObjectSchema.optional(), cursor: OrderItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrderItemScalarFieldEnumSchema, OrderItemScalarFieldEnumSchema.array()]).optional() }).strict();