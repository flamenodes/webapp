import * as z from 'zod';

export const ServerScalarFieldEnumSchema = z.enum(['id', 'userId', 'orderItemId', 'name', 'type', 'status', 'ip', 'port', 'pterodactylServerId', 'expiresAt', 'resources', 'pterodactylData', 'suspended', 'createdAt', 'updatedAt'])

export type ServerScalarFieldEnum = z.infer<typeof ServerScalarFieldEnumSchema>;