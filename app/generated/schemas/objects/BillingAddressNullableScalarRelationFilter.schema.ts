import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { BillingAddressWhereInputObjectSchema as BillingAddressWhereInputObjectSchema } from './BillingAddressWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BillingAddressWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => BillingAddressWhereInputObjectSchema).optional().nullable()
}).strict();
export const BillingAddressNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.BillingAddressNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BillingAddressNullableScalarRelationFilter>;
export const BillingAddressNullableScalarRelationFilterObjectZodSchema = makeSchema();
