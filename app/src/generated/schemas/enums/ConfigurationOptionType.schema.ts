import * as z from 'zod';

export const ConfigurationOptionTypeSchema = z.enum(['SELECT', 'RADIO', 'TEXT', 'NUMBER'])

export type ConfigurationOptionType = z.infer<typeof ConfigurationOptionTypeSchema>;