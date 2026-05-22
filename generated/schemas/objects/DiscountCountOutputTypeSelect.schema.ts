import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { DiscountCountOutputTypeCountProductArgsObjectSchema as DiscountCountOutputTypeCountProductArgsObjectSchema } from './DiscountCountOutputTypeCountProductArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => DiscountCountOutputTypeCountProductArgsObjectSchema)]).optional()
}).strict();
export const DiscountCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DiscountCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DiscountCountOutputTypeSelect>;
export const DiscountCountOutputTypeSelectObjectZodSchema = makeSchema();
