import * as z from 'zod';

export const ConfigurationOptionScalarFieldEnumSchema = z.enum(['id', 'name', 'label', 'description', 'type', 'required', 'category', 'sortOrder', 'createdAt', 'updatedAt'])

export type ConfigurationOptionScalarFieldEnum = z.infer<typeof ConfigurationOptionScalarFieldEnumSchema>;