import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'createdAt', 'updatedAt', 'banExpires', 'banReason', 'banned', 'displayUsername', 'firstname', 'lastname', 'role', 'username', 'clientId', 'pteroUserId'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;