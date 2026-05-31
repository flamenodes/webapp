import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './StatusNodeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StatusNodeSelectObjectSchema).optional()
}).strict();
export const StatusNodeArgsObjectSchema = makeSchema();
export const StatusNodeArgsObjectZodSchema = makeSchema();
