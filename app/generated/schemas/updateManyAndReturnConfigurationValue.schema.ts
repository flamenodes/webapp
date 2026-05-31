import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './objects/ConfigurationValueSelect.schema';
import { ConfigurationValueUpdateManyMutationInputObjectSchema as ConfigurationValueUpdateManyMutationInputObjectSchema } from './objects/ConfigurationValueUpdateManyMutationInput.schema';
import { ConfigurationValueWhereInputObjectSchema as ConfigurationValueWhereInputObjectSchema } from './objects/ConfigurationValueWhereInput.schema';

export const ConfigurationValueUpdateManyAndReturnSchema: z.ZodType<Prisma.ConfigurationValueUpdateManyAndReturnArgs> = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), data: ConfigurationValueUpdateManyMutationInputObjectSchema, where: ConfigurationValueWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConfigurationValueUpdateManyAndReturnArgs>;

export const ConfigurationValueUpdateManyAndReturnZodSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), data: ConfigurationValueUpdateManyMutationInputObjectSchema, where: ConfigurationValueWhereInputObjectSchema.optional() }).strict();