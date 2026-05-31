import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ConfigurationOptionCreateManyInputObjectSchema as ConfigurationOptionCreateManyInputObjectSchema } from './objects/ConfigurationOptionCreateManyInput.schema';

export const ConfigurationOptionCreateManySchema: z.ZodType<Prisma.ConfigurationOptionCreateManyArgs> = z.object({ data: z.union([ ConfigurationOptionCreateManyInputObjectSchema, z.array(ConfigurationOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConfigurationOptionCreateManyArgs>;

export const ConfigurationOptionCreateManyZodSchema = z.object({ data: z.union([ ConfigurationOptionCreateManyInputObjectSchema, z.array(ConfigurationOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();