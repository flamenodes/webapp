import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ConfigurationValueWhereInputObjectSchema as ConfigurationValueWhereInputObjectSchema } from './objects/ConfigurationValueWhereInput.schema';

export const ConfigurationValueDeleteManySchema: z.ZodType<Prisma.ConfigurationValueDeleteManyArgs> = z.object({ where: ConfigurationValueWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConfigurationValueDeleteManyArgs>;

export const ConfigurationValueDeleteManyZodSchema = z.object({ where: ConfigurationValueWhereInputObjectSchema.optional() }).strict();