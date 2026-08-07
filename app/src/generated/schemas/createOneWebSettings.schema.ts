import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { WebSettingsSelectObjectSchema as WebSettingsSelectObjectSchema } from './objects/WebSettingsSelect.schema';
import { WebSettingsCreateInputObjectSchema as WebSettingsCreateInputObjectSchema } from './objects/WebSettingsCreateInput.schema';
import { WebSettingsUncheckedCreateInputObjectSchema as WebSettingsUncheckedCreateInputObjectSchema } from './objects/WebSettingsUncheckedCreateInput.schema';

export const WebSettingsCreateOneSchema: z.ZodType<Prisma.WebSettingsCreateArgs> = z.object({ select: WebSettingsSelectObjectSchema.optional(),  data: z.union([WebSettingsCreateInputObjectSchema, WebSettingsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WebSettingsCreateArgs>;

export const WebSettingsCreateOneZodSchema = z.object({ select: WebSettingsSelectObjectSchema.optional(),  data: z.union([WebSettingsCreateInputObjectSchema, WebSettingsUncheckedCreateInputObjectSchema]) }).strict();