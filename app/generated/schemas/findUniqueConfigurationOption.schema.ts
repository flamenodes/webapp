import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ConfigurationOptionSelectObjectSchema as ConfigurationOptionSelectObjectSchema } from './objects/ConfigurationOptionSelect.schema';
import { ConfigurationOptionIncludeObjectSchema as ConfigurationOptionIncludeObjectSchema } from './objects/ConfigurationOptionInclude.schema';
import { ConfigurationOptionWhereUniqueInputObjectSchema as ConfigurationOptionWhereUniqueInputObjectSchema } from './objects/ConfigurationOptionWhereUniqueInput.schema';

export const ConfigurationOptionFindUniqueSchema: z.ZodType<Prisma.ConfigurationOptionFindUniqueArgs> = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), include: ConfigurationOptionIncludeObjectSchema.optional(), where: ConfigurationOptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConfigurationOptionFindUniqueArgs>;

export const ConfigurationOptionFindUniqueZodSchema = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), include: ConfigurationOptionIncludeObjectSchema.optional(), where: ConfigurationOptionWhereUniqueInputObjectSchema }).strict();