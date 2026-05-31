import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ConfigurationValueCreateManyInputObjectSchema as ConfigurationValueCreateManyInputObjectSchema } from './objects/ConfigurationValueCreateManyInput.schema';

export const ConfigurationValueCreateManySchema: z.ZodType<Prisma.ConfigurationValueCreateManyArgs> = z.object({ data: z.union([ ConfigurationValueCreateManyInputObjectSchema, z.array(ConfigurationValueCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConfigurationValueCreateManyArgs>;

export const ConfigurationValueCreateManyZodSchema = z.object({ data: z.union([ ConfigurationValueCreateManyInputObjectSchema, z.array(ConfigurationValueCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();