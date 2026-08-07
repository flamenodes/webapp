import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { WebSettingsSelectObjectSchema as WebSettingsSelectObjectSchema } from './objects/WebSettingsSelect.schema';
import { WebSettingsWhereUniqueInputObjectSchema as WebSettingsWhereUniqueInputObjectSchema } from './objects/WebSettingsWhereUniqueInput.schema';

export const WebSettingsFindUniqueSchema: z.ZodType<Prisma.WebSettingsFindUniqueArgs> = z.object({ select: WebSettingsSelectObjectSchema.optional(),  where: WebSettingsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WebSettingsFindUniqueArgs>;

export const WebSettingsFindUniqueZodSchema = z.object({ select: WebSettingsSelectObjectSchema.optional(),  where: WebSettingsWhereUniqueInputObjectSchema }).strict();