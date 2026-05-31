import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ConfigurationValueUpdateManyMutationInputObjectSchema as ConfigurationValueUpdateManyMutationInputObjectSchema } from './objects/ConfigurationValueUpdateManyMutationInput.schema';
import { ConfigurationValueWhereInputObjectSchema as ConfigurationValueWhereInputObjectSchema } from './objects/ConfigurationValueWhereInput.schema';

export const ConfigurationValueUpdateManySchema: z.ZodType<Prisma.ConfigurationValueUpdateManyArgs> = z.object({ data: ConfigurationValueUpdateManyMutationInputObjectSchema, where: ConfigurationValueWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConfigurationValueUpdateManyArgs>;

export const ConfigurationValueUpdateManyZodSchema = z.object({ data: ConfigurationValueUpdateManyMutationInputObjectSchema, where: ConfigurationValueWhereInputObjectSchema.optional() }).strict();