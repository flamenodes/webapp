import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ConfigurationOptionUpdateManyMutationInputObjectSchema as ConfigurationOptionUpdateManyMutationInputObjectSchema } from './objects/ConfigurationOptionUpdateManyMutationInput.schema';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './objects/ConfigurationOptionWhereInput.schema';

export const ConfigurationOptionUpdateManySchema: z.ZodType<Prisma.ConfigurationOptionUpdateManyArgs> = z.object({ data: ConfigurationOptionUpdateManyMutationInputObjectSchema, where: ConfigurationOptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConfigurationOptionUpdateManyArgs>;

export const ConfigurationOptionUpdateManyZodSchema = z.object({ data: ConfigurationOptionUpdateManyMutationInputObjectSchema, where: ConfigurationOptionWhereInputObjectSchema.optional() }).strict();