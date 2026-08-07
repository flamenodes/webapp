import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './objects/ConfigurationValueSelect.schema';
import { ConfigurationValueIncludeObjectSchema as ConfigurationValueIncludeObjectSchema } from './objects/ConfigurationValueInclude.schema';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './objects/ConfigurationValueWhereUniqueInput.schema';
import { ConfigurationValueCreateInputObjectSchema as ConfigurationValueCreateInputObjectSchema } from './objects/ConfigurationValueCreateInput.schema';
import { ConfigurationValueUncheckedCreateInputObjectSchema as ConfigurationValueUncheckedCreateInputObjectSchema } from './objects/ConfigurationValueUncheckedCreateInput.schema';
import { ConfigurationValueUpdateInputObjectSchema as ConfigurationValueUpdateInputObjectSchema } from './objects/ConfigurationValueUpdateInput.schema';
import { ConfigurationValueUncheckedUpdateInputObjectSchema as ConfigurationValueUncheckedUpdateInputObjectSchema } from './objects/ConfigurationValueUncheckedUpdateInput.schema';

export const ConfigurationValueUpsertOneSchema: z.ZodType<Prisma.ConfigurationValueUpsertArgs> = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), where: ConfigurationValueWhereUniqueInputObjectSchema, create: z.union([ ConfigurationValueCreateInputObjectSchema, ConfigurationValueUncheckedCreateInputObjectSchema ]), update: z.union([ ConfigurationValueUpdateInputObjectSchema, ConfigurationValueUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ConfigurationValueUpsertArgs>;

export const ConfigurationValueUpsertOneZodSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), where: ConfigurationValueWhereUniqueInputObjectSchema, create: z.union([ ConfigurationValueCreateInputObjectSchema, ConfigurationValueUncheckedCreateInputObjectSchema ]), update: z.union([ ConfigurationValueUpdateInputObjectSchema, ConfigurationValueUncheckedUpdateInputObjectSchema ]) }).strict();