import * as z from 'zod';
import { CouponSelectObjectSchema as CouponSelectObjectSchema } from './CouponSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CouponSelectObjectSchema).optional()
}).strict();
export const CouponArgsObjectSchema = makeSchema();
export const CouponArgsObjectZodSchema = makeSchema();
