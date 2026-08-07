import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ConfigurationOptionSelectObjectSchema as ConfigurationOptionSelectObjectSchema } from './objects/ConfigurationOptionSelect.schema';
import { ConfigurationOptionIncludeObjectSchema as ConfigurationOptionIncludeObjectSchema } from './objects/ConfigurationOptionInclude.schema';
import { ConfigurationOptionCreateInputObjectSchema as ConfigurationOptionCreateInputObjectSchema } from './objects/ConfigurationOptionCreateInput.schema';
import { ConfigurationOptionUncheckedCreateInputObjectSchema as ConfigurationOptionUncheckedCreateInputObjectSchema } from './objects/ConfigurationOptionUncheckedCreateInput.schema';

export const ConfigurationOptionCreateOneSchema: z.ZodType<Prisma.ConfigurationOptionCreateArgs> = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), include: ConfigurationOptionIncludeObjectSchema.optional(), data: z.union([ConfigurationOptionCreateInputObjectSchema, ConfigurationOptionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ConfigurationOptionCreateArgs>;

export const ConfigurationOptionCreateOneZodSchema = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), include: ConfigurationOptionIncludeObjectSchema.optional(), data: z.union([ConfigurationOptionCreateInputObjectSchema, ConfigurationOptionUncheckedCreateInputObjectSchema]) }).strict();