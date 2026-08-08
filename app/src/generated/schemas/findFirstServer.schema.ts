import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ServerIncludeObjectSchema as ServerIncludeObjectSchema } from './objects/ServerInclude.schema';
import { ServerOrderByWithRelationInputObjectSchema as ServerOrderByWithRelationInputObjectSchema } from './objects/ServerOrderByWithRelationInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';
import { ServerScalarFieldEnumSchema } from './enums/ServerScalarFieldEnum.schema';
import { OrderItemArgsObjectSchema as OrderItemArgsObjectSchema } from './objects/OrderItemArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { OrderFindManySchema } from './findManyOrder.schema';
import { ServerCountOutputTypeArgsObjectSchema as ServerCountOutputTypeArgsObjectSchema } from './objects/ServerCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServerFindFirstSelectSchema: z.ZodType<Prisma.ServerSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    orderItemId: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    status: z.boolean().optional(),
    ip: z.boolean().optional(),
    port: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    resources: z.boolean().optional(),
    pterodactylData: z.boolean().optional(),
    suspended: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    pterodactylServerId: z.boolean().optional(),
    orderItem: z.union([z.boolean(), z.lazy(() => OrderItemArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    renewals: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ServerSelect>;

export const ServerFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    orderItemId: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    status: z.boolean().optional(),
    ip: z.boolean().optional(),
    port: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    resources: z.boolean().optional(),
    pterodactylData: z.boolean().optional(),
    suspended: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    pterodactylServerId: z.boolean().optional(),
    orderItem: z.union([z.boolean(), z.lazy(() => OrderItemArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    renewals: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const ServerFindFirstSchema: z.ZodType<Prisma.ServerFindFirstArgs> = z.object({ select: ServerFindFirstSelectSchema.optional(), include: z.lazy(() => ServerIncludeObjectSchema.optional()), orderBy: z.union([ServerOrderByWithRelationInputObjectSchema, ServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServerWhereInputObjectSchema.optional(), cursor: ServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServerScalarFieldEnumSchema, ServerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ServerFindFirstArgs>;

export const ServerFindFirstZodSchema = z.object({ select: ServerFindFirstSelectSchema.optional(), include: z.lazy(() => ServerIncludeObjectSchema.optional()), orderBy: z.union([ServerOrderByWithRelationInputObjectSchema, ServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServerWhereInputObjectSchema.optional(), cursor: ServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServerScalarFieldEnumSchema, ServerScalarFieldEnumSchema.array()]).optional() }).strict();