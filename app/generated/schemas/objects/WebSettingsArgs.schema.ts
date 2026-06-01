import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { WebSettingsSelectObjectSchema as WebSettingsSelectObjectSchema } from './WebSettingsSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WebSettingsSelectObjectSchema).optional()
}).strict();
export const WebSettingsArgsObjectSchema = makeSchema();
export const WebSettingsArgsObjectZodSchema = makeSchema();
