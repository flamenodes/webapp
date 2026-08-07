import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { WebSettingsUpdateManyMutationInputObjectSchema as WebSettingsUpdateManyMutationInputObjectSchema } from './objects/WebSettingsUpdateManyMutationInput.schema';
import { WebSettingsWhereInputObjectSchema as WebSettingsWhereInputObjectSchema } from './objects/WebSettingsWhereInput.schema';

export const WebSettingsUpdateManySchema: z.ZodType<Prisma.WebSettingsUpdateManyArgs> = z.object({ data: WebSettingsUpdateManyMutationInputObjectSchema, where: WebSettingsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WebSettingsUpdateManyArgs>;

export const WebSettingsUpdateManyZodSchema = z.object({ data: WebSettingsUpdateManyMutationInputObjectSchema, where: WebSettingsWhereInputObjectSchema.optional() }).strict();