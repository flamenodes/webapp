import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './objects/ConfigurationValueSelect.schema';
import { ConfigurationValueIncludeObjectSchema as ConfigurationValueIncludeObjectSchema } from './objects/ConfigurationValueInclude.schema';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './objects/ConfigurationValueWhereUniqueInput.schema';

export const ConfigurationValueFindUniqueSchema: z.ZodType<Prisma.ConfigurationValueFindUniqueArgs> = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), where: ConfigurationValueWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConfigurationValueFindUniqueArgs>;

export const ConfigurationValueFindUniqueZodSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), where: ConfigurationValueWhereUniqueInputObjectSchema }).strict();