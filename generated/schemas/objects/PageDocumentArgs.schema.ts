import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './PageDocumentSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PageDocumentSelectObjectSchema).optional()
}).strict();
export const PageDocumentArgsObjectSchema = makeSchema();
export const PageDocumentArgsObjectZodSchema = makeSchema();
