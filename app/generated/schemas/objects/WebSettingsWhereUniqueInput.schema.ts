import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string().optional()
}).strict();
export const WebSettingsWhereUniqueInputObjectSchema: z.ZodType<Prisma.WebSettingsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsWhereUniqueInput>;
export const WebSettingsWhereUniqueInputObjectZodSchema = makeSchema();
