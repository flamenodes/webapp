import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { WebSettingsSelectObjectSchema as WebSettingsSelectObjectSchema } from './objects/WebSettingsSelect.schema';
import { WebSettingsWhereUniqueInputObjectSchema as WebSettingsWhereUniqueInputObjectSchema } from './objects/WebSettingsWhereUniqueInput.schema';

export const WebSettingsDeleteOneSchema: z.ZodType<Prisma.WebSettingsDeleteArgs> = z.object({ select: WebSettingsSelectObjectSchema.optional(),  where: WebSettingsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WebSettingsDeleteArgs>;

export const WebSettingsDeleteOneZodSchema = z.object({ select: WebSettingsSelectObjectSchema.optional(),  where: WebSettingsWhereUniqueInputObjectSchema }).strict();