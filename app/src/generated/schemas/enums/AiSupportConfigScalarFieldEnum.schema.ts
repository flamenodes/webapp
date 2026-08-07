import * as z from 'zod';

export const AiSupportConfigScalarFieldEnumSchema = z.enum(['id', 'enabled', 'systemPrompt', 'model', 'updatedAt', 'createdAt'])

export type AiSupportConfigScalarFieldEnum = z.infer<typeof AiSupportConfigScalarFieldEnumSchema>;