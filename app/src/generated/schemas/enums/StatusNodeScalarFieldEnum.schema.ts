import * as z from 'zod';

export const StatusNodeScalarFieldEnumSchema = z.enum(['id', 'name', 'ip', 'location', 'type', 'port', 'protocol', 'status', 'latency', 'lastChecked', 'createdAt', 'updatedAt', 'cpu', 'disk', 'memory'])

export type StatusNodeScalarFieldEnum = z.infer<typeof StatusNodeScalarFieldEnumSchema>;