import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { WebSettingsSelectObjectSchema as WebSettingsSelectObjectSchema } from './objects/WebSettingsSelect.schema';
import { WebSettingsCreateManyInputObjectSchema as WebSettingsCreateManyInputObjectSchema } from './objects/WebSettingsCreateManyInput.schema';

export const WebSettingsCreateManyAndReturnSchema: z.ZodType<Prisma.WebSettingsCreateManyAndReturnArgs> = z.object({ select: WebSettingsSelectObjectSchema.optional(), data: z.union([ WebSettingsCreateManyInputObjectSchema, z.array(WebSettingsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WebSettingsCreateManyAndReturnArgs>;

export const WebSettingsCreateManyAndReturnZodSchema = z.object({ select: WebSettingsSelectObjectSchema.optional(), data: z.union([ WebSettingsCreateManyInputObjectSchema, z.array(WebSettingsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();