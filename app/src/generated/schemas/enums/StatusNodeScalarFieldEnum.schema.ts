import * as z from 'zod';

export const StatusNodeScalarFieldEnumSchema = z.enum(['id', 'name', 'ip', 'location', 'type', 'port', 'protocol', 'status', 'latency', 'lastChecked', 'cpu', 'memory', 'disk', 'createdAt', 'updatedAt'])

export type StatusNodeScalarFieldEnum = z.infer<typeof StatusNodeScalarFieldEnumSchema>;