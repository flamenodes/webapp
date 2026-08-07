import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './objects/ConfigurationOptionWhereInput.schema';

export const ConfigurationOptionDeleteManySchema: z.ZodType<Prisma.ConfigurationOptionDeleteManyArgs> = z.object({ where: ConfigurationOptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConfigurationOptionDeleteManyArgs>;

export const ConfigurationOptionDeleteManyZodSchema = z.object({ where: ConfigurationOptionWhereInputObjectSchema.optional() }).strict();