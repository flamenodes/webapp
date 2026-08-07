import * as z from 'zod';
import { AiSupportConfigSelectObjectSchema as AiSupportConfigSelectObjectSchema } from './AiSupportConfigSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AiSupportConfigSelectObjectSchema).optional()
}).strict();
export const AiSupportConfigArgsObjectSchema = makeSchema();
export const AiSupportConfigArgsObjectZodSchema = makeSchema();
