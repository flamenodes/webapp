import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationValueWhereInputObjectSchema as ConfigurationValueWhereInputObjectSchema } from './ConfigurationValueWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ConfigurationValueWhereInputObjectSchema).optional(),
  some: z.lazy(() => ConfigurationValueWhereInputObjectSchema).optional(),
  none: z.lazy(() => ConfigurationValueWhereInputObjectSchema).optional()
}).strict();
export const ConfigurationValueListRelationFilterObjectSchema: z.ZodType<Prisma.ConfigurationValueListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueListRelationFilter>;
export const ConfigurationValueListRelationFilterObjectZodSchema = makeSchema();
