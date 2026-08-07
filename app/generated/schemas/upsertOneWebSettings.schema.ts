import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { WebSettingsSelectObjectSchema as WebSettingsSelectObjectSchema } from './objects/WebSettingsSelect.schema';
import { WebSettingsWhereUniqueInputObjectSchema as WebSettingsWhereUniqueInputObjectSchema } from './objects/WebSettingsWhereUniqueInput.schema';
import { WebSettingsCreateInputObjectSchema as WebSettingsCreateInputObjectSchema } from './objects/WebSettingsCreateInput.schema';
import { WebSettingsUncheckedCreateInputObjectSchema as WebSettingsUncheckedCreateInputObjectSchema } from './objects/WebSettingsUncheckedCreateInput.schema';
import { WebSettingsUpdateInputObjectSchema as WebSettingsUpdateInputObjectSchema } from './objects/WebSettingsUpdateInput.schema';
import { WebSettingsUncheckedUpdateInputObjectSchema as WebSettingsUncheckedUpdateInputObjectSchema } from './objects/WebSettingsUncheckedUpdateInput.schema';

export const WebSettingsUpsertOneSchema: z.ZodType<Prisma.WebSettingsUpsertArgs> = z.object({ select: WebSettingsSelectObjectSchema.optional(),  where: WebSettingsWhereUniqueInputObjectSchema, create: z.union([ WebSettingsCreateInputObjectSchema, WebSettingsUncheckedCreateInputObjectSchema ]), update: z.union([ WebSettingsUpdateInputObjectSchema, WebSettingsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WebSettingsUpsertArgs>;

export const WebSettingsUpsertOneZodSchema = z.object({ select: WebSettingsSelectObjectSchema.optional(),  where: WebSettingsWhereUniqueInputObjectSchema, create: z.union([ WebSettingsCreateInputObjectSchema, WebSettingsUncheckedCreateInputObjectSchema ]), update: z.union([ WebSettingsUpdateInputObjectSchema, WebSettingsUncheckedUpdateInputObjectSchema ]) }).strict();