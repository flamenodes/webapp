import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './ConfigurationOptionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ConfigurationOptionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ConfigurationOptionWhereInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionScalarRelationFilterObjectSchema: z.ZodType<Prisma.ConfigurationOptionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionScalarRelationFilter>;
export const ConfigurationOptionScalarRelationFilterObjectZodSchema = makeSchema();
