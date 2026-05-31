import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './RazorpayConfigSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RazorpayConfigSelectObjectSchema).optional()
}).strict();
export const RazorpayConfigArgsObjectSchema = makeSchema();
export const RazorpayConfigArgsObjectZodSchema = makeSchema();
