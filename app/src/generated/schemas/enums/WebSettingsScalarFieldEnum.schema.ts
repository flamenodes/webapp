import * as z from 'zod';

export const WebSettingsScalarFieldEnumSchema = z.enum(['id', 'key', 'value', 'updatedAt', 'createdAt'])

export type WebSettingsScalarFieldEnum = z.infer<typeof WebSettingsScalarFieldEnumSchema>;