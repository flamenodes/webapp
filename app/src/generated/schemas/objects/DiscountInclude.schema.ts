import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductFindManySchema as ProductFindManySchema } from '../findManyProduct.schema';
import { DiscountCountOutputTypeArgsObjectSchema as DiscountCountOutputTypeArgsObjectSchema } from './DiscountCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DiscountCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DiscountIncludeObjectSchema: z.ZodType<Prisma.DiscountInclude> = makeSchema() as unknown as z.ZodType<Prisma.DiscountInclude>;
export const DiscountIncludeObjectZodSchema = makeSchema();
