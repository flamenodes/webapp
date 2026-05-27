import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductFindManySchema as ProductFindManySchema } from '../findManyProduct.schema';
import { DiscountCountOutputTypeArgsObjectSchema as DiscountCountOutputTypeArgsObjectSchema } from './DiscountCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  percentage: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DiscountCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DiscountSelectObjectSchema: z.ZodType<Prisma.DiscountSelect> = makeSchema() as unknown as z.ZodType<Prisma.DiscountSelect>;
export const DiscountSelectObjectZodSchema = makeSchema();
