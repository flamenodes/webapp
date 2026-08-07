import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { WebSettingsWhereInputObjectSchema as WebSettingsWhereInputObjectSchema } from './objects/WebSettingsWhereInput.schema';

export const WebSettingsDeleteManySchema: z.ZodType<Prisma.WebSettingsDeleteManyArgs> = z.object({ where: WebSettingsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WebSettingsDeleteManyArgs>;

export const WebSettingsDeleteManyZodSchema = z.object({ where: WebSettingsWhereInputObjectSchema.optional() }).strict();