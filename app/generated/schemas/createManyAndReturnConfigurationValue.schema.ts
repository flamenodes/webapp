import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './objects/ConfigurationValueSelect.schema';
import { ConfigurationValueCreateManyInputObjectSchema as ConfigurationValueCreateManyInputObjectSchema } from './objects/ConfigurationValueCreateManyInput.schema';

export const ConfigurationValueCreateManyAndReturnSchema: z.ZodType<Prisma.ConfigurationValueCreateManyAndReturnArgs> = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), data: z.union([ ConfigurationValueCreateManyInputObjectSchema, z.array(ConfigurationValueCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConfigurationValueCreateManyAndReturnArgs>;

export const ConfigurationValueCreateManyAndReturnZodSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), data: z.union([ ConfigurationValueCreateManyInputObjectSchema, z.array(ConfigurationValueCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();