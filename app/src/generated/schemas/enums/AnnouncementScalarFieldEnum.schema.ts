import * as z from 'zod';

export const AnnouncementScalarFieldEnumSchema = z.enum(['id', 'title', 'message', 'type', 'active', 'priority', 'link', 'expiresAt', 'createdAt', 'updatedAt'])

export type AnnouncementScalarFieldEnum = z.infer<typeof AnnouncementScalarFieldEnumSchema>;