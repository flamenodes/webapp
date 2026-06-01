import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { WebSettingsSelectObjectSchema as WebSettingsSelectObjectSchema } from './objects/WebSettingsSelect.schema';
import { WebSettingsUpdateInputObjectSchema as WebSettingsUpdateInputObjectSchema } from './objects/WebSettingsUpdateInput.schema';
import { WebSettingsUncheckedUpdateInputObjectSchema as WebSettingsUncheckedUpdateInputObjectSchema } from './objects/WebSettingsUncheckedUpdateInput.schema';
import { WebSettingsWhereUniqueInputObjectSchema as WebSettingsWhereUniqueInputObjectSchema } from './objects/WebSettingsWhereUniqueInput.schema';

export const WebSettingsUpdateOneSchema: z.ZodType<Prisma.WebSettingsUpdateArgs> = z.object({ select: WebSettingsSelectObjectSchema.optional(),  data: z.union([WebSettingsUpdateInputObjectSchema, WebSettingsUncheckedUpdateInputObjectSchema]), where: WebSettingsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WebSettingsUpdateArgs>;

export const WebSettingsUpdateOneZodSchema = z.object({ select: WebSettingsSelectObjectSchema.optional(),  data: z.union([WebSettingsUpdateInputObjectSchema, WebSettingsUncheckedUpdateInputObjectSchema]), where: WebSettingsWhereUniqueInputObjectSchema }).strict();