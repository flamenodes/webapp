import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { ProductCreateNestedOneWithoutBillingOptionsInputObjectSchema as ProductCreateNestedOneWithoutBillingOptionsInputObjectSchema } from './ProductCreateNestedOneWithoutBillingOptionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  billingPeriod: BillingPeriodSchema,
  price: z.number().int(),
  product: z.lazy(() => ProductCreateNestedOneWithoutBillingOptionsInputObjectSchema)
}).strict();
export const ProductBillingOptionCreateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionCreateInput>;
export const ProductBillingOptionCreateInputObjectZodSchema = makeSchema();
