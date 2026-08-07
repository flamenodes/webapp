import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationOptionArgsObjectSchema as ConfigurationOptionArgsObjectSchema } from './ConfigurationOptionArgs.schema'

const makeSchema = () => z.object({
  option: z.union([z.boolean(), z.lazy(() => ConfigurationOptionArgsObjectSchema)]).optional()
}).strict();
export const ConfigurationValueIncludeObjectSchema: z.ZodType<Prisma.ConfigurationValueInclude> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueInclude>;
export const ConfigurationValueIncludeObjectZodSchema = makeSchema();
