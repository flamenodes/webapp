import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ServerWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ServerWhereInputObjectSchema).optional().nullable()
}).strict();
export const ServerNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ServerNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ServerNullableScalarRelationFilter>;
export const ServerNullableScalarRelationFilterObjectZodSchema = makeSchema();
