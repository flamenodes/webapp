import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './DiscountWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DiscountWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => DiscountWhereInputObjectSchema).optional().nullable()
}).strict();
export const DiscountNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DiscountNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DiscountNullableScalarRelationFilter>;
export const DiscountNullableScalarRelationFilterObjectZodSchema = makeSchema();
