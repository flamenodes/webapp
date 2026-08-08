import * as z from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id', 'userId', 'type', 'title', 'message', 'read', 'createdAt', 'link', 'metadata'])

export type NotificationScalarFieldEnum = z.infer<typeof NotificationScalarFieldEnumSchema>;