import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => InvoiceWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => InvoiceWhereInputObjectSchema).optional().nullable()
}).strict();
export const InvoiceNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.InvoiceNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceNullableScalarRelationFilter>;
export const InvoiceNullableScalarRelationFilterObjectZodSchema = makeSchema();
