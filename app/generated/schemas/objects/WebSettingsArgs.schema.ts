import * as z from 'zod';
import { WebSettingsSelectObjectSchema as WebSettingsSelectObjectSchema } from './WebSettingsSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WebSettingsSelectObjectSchema).optional()
}).strict();
export const WebSettingsArgsObjectSchema = makeSchema();
export const WebSettingsArgsObjectZodSchema = makeSchema();
