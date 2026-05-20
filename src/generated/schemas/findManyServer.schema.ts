import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ServerIncludeObjectSchema as ServerIncludeObjectSchema } from './objects/ServerInclude.schema';
import { ServerOrderByWithRelationInputObjectSchema as ServerOrderByWithRelationInputObjectSchema } from './objects/ServerOrderByWithRelationInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';
import { ServerScalarFieldEnumSchema } from './enums/ServerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServerFindManySelectSchema: z.ZodType<Prisma.ServerSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    orderItemId: z.boolean().optional(),
    orderItem: z.boolean().optional(),
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
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ServerSelect>;

export const ServerFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    orderItemId: z.boolean().optional(),
    orderItem: z.boolean().optional(),
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
    updatedAt: z.boolean().optional()
  }).strict();

export const ServerFindManySchema: z.ZodType<Prisma.ServerFindManyArgs> = z.object({ select: ServerFindManySelectSchema.optional(), include: z.lazy(() => ServerIncludeObjectSchema.optional()), orderBy: z.union([ServerOrderByWithRelationInputObjectSchema, ServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServerWhereInputObjectSchema.optional(), cursor: ServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServerScalarFieldEnumSchema, ServerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ServerFindManyArgs>;

export const ServerFindManyZodSchema = z.object({ select: ServerFindManySelectSchema.optional(), include: z.lazy(() => ServerIncludeObjectSchema.optional()), orderBy: z.union([ServerOrderByWithRelationInputObjectSchema, ServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServerWhereInputObjectSchema.optional(), cursor: ServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServerScalarFieldEnumSchema, ServerScalarFieldEnumSchema.array()]).optional() }).strict();