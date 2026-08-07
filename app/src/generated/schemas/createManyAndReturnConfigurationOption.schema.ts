import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ConfigurationOptionSelectObjectSchema as ConfigurationOptionSelectObjectSchema } from './objects/ConfigurationOptionSelect.schema';
import { ConfigurationOptionCreateManyInputObjectSchema as ConfigurationOptionCreateManyInputObjectSchema } from './objects/ConfigurationOptionCreateManyInput.schema';

export const ConfigurationOptionCreateManyAndReturnSchema: z.ZodType<Prisma.ConfigurationOptionCreateManyAndReturnArgs> = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), data: z.union([ ConfigurationOptionCreateManyInputObjectSchema, z.array(ConfigurationOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConfigurationOptionCreateManyAndReturnArgs>;

export const ConfigurationOptionCreateManyAndReturnZodSchema = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), data: z.union([ ConfigurationOptionCreateManyInputObjectSchema, z.array(ConfigurationOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();