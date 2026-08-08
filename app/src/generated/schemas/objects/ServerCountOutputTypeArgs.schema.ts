import * as z from 'zod';
import { ServerCountOutputTypeSelectObjectSchema as ServerCountOutputTypeSelectObjectSchema } from './ServerCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ServerCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ServerCountOutputTypeArgsObjectSchema = makeSchema();
export const ServerCountOutputTypeArgsObjectZodSchema = makeSchema();
