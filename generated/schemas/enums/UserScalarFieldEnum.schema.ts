import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'clientId', 'name', 'email', 'emailVerified', 'image', 'createdAt', 'updatedAt', 'role', 'banned', 'banReason', 'banExpires', 'username', 'firstname', 'lastname', 'displayUsername'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;