import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { WebSettingsSelectObjectSchema as WebSettingsSelectObjectSchema } from './objects/WebSettingsSelect.schema';
import { WebSettingsWhereUniqueInputObjectSchema as WebSettingsWhereUniqueInputObjectSchema } from './objects/WebSettingsWhereUniqueInput.schema';

export const WebSettingsFindUniqueOrThrowSchema: z.ZodType<Prisma.WebSettingsFindUniqueOrThrowArgs> = z.object({ select: WebSettingsSelectObjectSchema.optional(),  where: WebSettingsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WebSettingsFindUniqueOrThrowArgs>;

export const WebSettingsFindUniqueOrThrowZodSchema = z.object({ select: WebSettingsSelectObjectSchema.optional(),  where: WebSettingsWhereUniqueInputObjectSchema }).strict();