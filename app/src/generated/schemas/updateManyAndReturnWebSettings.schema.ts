import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { WebSettingsSelectObjectSchema as WebSettingsSelectObjectSchema } from './objects/WebSettingsSelect.schema';
import { WebSettingsUpdateManyMutationInputObjectSchema as WebSettingsUpdateManyMutationInputObjectSchema } from './objects/WebSettingsUpdateManyMutationInput.schema';
import { WebSettingsWhereInputObjectSchema as WebSettingsWhereInputObjectSchema } from './objects/WebSettingsWhereInput.schema';

export const WebSettingsUpdateManyAndReturnSchema: z.ZodType<Prisma.WebSettingsUpdateManyAndReturnArgs> = z.object({ select: WebSettingsSelectObjectSchema.optional(), data: WebSettingsUpdateManyMutationInputObjectSchema, where: WebSettingsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WebSettingsUpdateManyAndReturnArgs>;

export const WebSettingsUpdateManyAndReturnZodSchema = z.object({ select: WebSettingsSelectObjectSchema.optional(), data: WebSettingsUpdateManyMutationInputObjectSchema, where: WebSettingsWhereInputObjectSchema.optional() }).strict();