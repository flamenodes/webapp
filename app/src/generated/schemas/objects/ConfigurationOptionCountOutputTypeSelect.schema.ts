import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationOptionCountOutputTypeCountValuesArgsObjectSchema as ConfigurationOptionCountOutputTypeCountValuesArgsObjectSchema } from './ConfigurationOptionCountOutputTypeCountValuesArgs.schema'

const makeSchema = () => z.object({
  values: z.union([z.boolean(), z.lazy(() => ConfigurationOptionCountOutputTypeCountValuesArgsObjectSchema)]).optional()
}).strict();
export const ConfigurationOptionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ConfigurationOptionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionCountOutputTypeSelect>;
export const ConfigurationOptionCountOutputTypeSelectObjectZodSchema = makeSchema();
