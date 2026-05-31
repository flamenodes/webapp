import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './ProductBillingOptionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductBillingOptionWhereInputObjectSchema).optional()
}).strict();
export const ProductCountOutputTypeCountBillingOptionsArgsObjectSchema = makeSchema();
export const ProductCountOutputTypeCountBillingOptionsArgsObjectZodSchema = makeSchema();
