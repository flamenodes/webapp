import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './objects/ConfigurationValueSelect.schema';
import { ConfigurationValueIncludeObjectSchema as ConfigurationValueIncludeObjectSchema } from './objects/ConfigurationValueInclude.schema';
import { ConfigurationValueCreateInputObjectSchema as ConfigurationValueCreateInputObjectSchema } from './objects/ConfigurationValueCreateInput.schema';
import { ConfigurationValueUncheckedCreateInputObjectSchema as ConfigurationValueUncheckedCreateInputObjectSchema } from './objects/ConfigurationValueUncheckedCreateInput.schema';

export const ConfigurationValueCreateOneSchema: z.ZodType<Prisma.ConfigurationValueCreateArgs> = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), data: z.union([ConfigurationValueCreateInputObjectSchema, ConfigurationValueUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ConfigurationValueCreateArgs>;

export const ConfigurationValueCreateOneZodSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), data: z.union([ConfigurationValueCreateInputObjectSchema, ConfigurationValueUncheckedCreateInputObjectSchema]) }).strict();