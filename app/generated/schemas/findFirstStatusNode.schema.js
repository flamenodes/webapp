import * as z from 'zod';
import { StatusNodeOrderByWithRelationInputObjectSchema as StatusNodeOrderByWithRelationInputObjectSchema } from './objects/StatusNodeOrderByWithRelationInput.schema';
import { StatusNodeWhereInputObjectSchema as StatusNodeWhereInputObjectSchema } from './objects/StatusNodeWhereInput.schema';
import { StatusNodeWhereUniqueInputObjectSchema as StatusNodeWhereUniqueInputObjectSchema } from './objects/StatusNodeWhereUniqueInput.schema';
import { StatusNodeScalarFieldEnumSchema } from './enums/StatusNodeScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const StatusNodeFindFirstSelectSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    ip: z.boolean().optional(),
    location: z.boolean().optional(),
    type: z.boolean().optional(),
    port: z.boolean().optional(),
    protocol: z.boolean().optional(),
    status: z.boolean().optional(),
    latency: z.boolean().optional(),
    lastChecked: z.boolean().optional(),
    cpu: z.boolean().optional(),
    memory: z.boolean().optional(),
    disk: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const StatusNodeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    ip: z.boolean().optional(),
    location: z.boolean().optional(),
    type: z.boolean().optional(),
    port: z.boolean().optional(),
    protocol: z.boolean().optional(),
    status: z.boolean().optional(),
    latency: z.boolean().optional(),
    lastChecked: z.boolean().optional(),
    cpu: z.boolean().optional(),
    memory: z.boolean().optional(),
    disk: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const StatusNodeFindFirstSchema = z.object({ select: StatusNodeFindFirstSelectSchema.optional(), orderBy: z.union([StatusNodeOrderByWithRelationInputObjectSchema, StatusNodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StatusNodeWhereInputObjectSchema.optional(), cursor: StatusNodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StatusNodeScalarFieldEnumSchema, StatusNodeScalarFieldEnumSchema.array()]).optional() }).strict();
export const StatusNodeFindFirstZodSchema = z.object({ select: StatusNodeFindFirstSelectSchema.optional(), orderBy: z.union([StatusNodeOrderByWithRelationInputObjectSchema, StatusNodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StatusNodeWhereInputObjectSchema.optional(), cursor: StatusNodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StatusNodeScalarFieldEnumSchema, StatusNodeScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findFirstStatusNode.schema.js.map