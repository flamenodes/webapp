import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { DiscountCountOutputTypeSelectObjectSchema as DiscountCountOutputTypeSelectObjectSchema } from './DiscountCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DiscountCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DiscountCountOutputTypeArgsObjectSchema = makeSchema();
export const DiscountCountOutputTypeArgsObjectZodSchema = makeSchema();
