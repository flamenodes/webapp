import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { WebSettingsCreateManyInputObjectSchema as WebSettingsCreateManyInputObjectSchema } from './objects/WebSettingsCreateManyInput.schema';

export const WebSettingsCreateManySchema: z.ZodType<Prisma.WebSettingsCreateManyArgs> = z.object({ data: z.union([ WebSettingsCreateManyInputObjectSchema, z.array(WebSettingsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WebSettingsCreateManyArgs>;

export const WebSettingsCreateManyZodSchema = z.object({ data: z.union([ WebSettingsCreateManyInputObjectSchema, z.array(WebSettingsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();