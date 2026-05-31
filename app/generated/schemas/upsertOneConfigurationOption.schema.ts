import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ConfigurationOptionSelectObjectSchema as ConfigurationOptionSelectObjectSchema } from './objects/ConfigurationOptionSelect.schema';
import { ConfigurationOptionIncludeObjectSchema as ConfigurationOptionIncludeObjectSchema } from './objects/ConfigurationOptionInclude.schema';
import { ConfigurationOptionWhereUniqueInputObjectSchema as ConfigurationOptionWhereUniqueInputObjectSchema } from './objects/ConfigurationOptionWhereUniqueInput.schema';
import { ConfigurationOptionCreateInputObjectSchema as ConfigurationOptionCreateInputObjectSchema } from './objects/ConfigurationOptionCreateInput.schema';
import { ConfigurationOptionUncheckedCreateInputObjectSchema as ConfigurationOptionUncheckedCreateInputObjectSchema } from './objects/ConfigurationOptionUncheckedCreateInput.schema';
import { ConfigurationOptionUpdateInputObjectSchema as ConfigurationOptionUpdateInputObjectSchema } from './objects/ConfigurationOptionUpdateInput.schema';
import { ConfigurationOptionUncheckedUpdateInputObjectSchema as ConfigurationOptionUncheckedUpdateInputObjectSchema } from './objects/ConfigurationOptionUncheckedUpdateInput.schema';

export const ConfigurationOptionUpsertOneSchema: z.ZodType<Prisma.ConfigurationOptionUpsertArgs> = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), include: ConfigurationOptionIncludeObjectSchema.optional(), where: ConfigurationOptionWhereUniqueInputObjectSchema, create: z.union([ ConfigurationOptionCreateInputObjectSchema, ConfigurationOptionUncheckedCreateInputObjectSchema ]), update: z.union([ ConfigurationOptionUpdateInputObjectSchema, ConfigurationOptionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ConfigurationOptionUpsertArgs>;

export const ConfigurationOptionUpsertOneZodSchema = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), include: ConfigurationOptionIncludeObjectSchema.optional(), where: ConfigurationOptionWhereUniqueInputObjectSchema, create: z.union([ ConfigurationOptionCreateInputObjectSchema, ConfigurationOptionUncheckedCreateInputObjectSchema ]), update: z.union([ ConfigurationOptionUpdateInputObjectSchema, ConfigurationOptionUncheckedUpdateInputObjectSchema ]) }).strict();