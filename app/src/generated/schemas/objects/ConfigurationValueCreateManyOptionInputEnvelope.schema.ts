import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationValueCreateManyOptionInputObjectSchema as ConfigurationValueCreateManyOptionInputObjectSchema } from './ConfigurationValueCreateManyOptionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ConfigurationValueCreateManyOptionInputObjectSchema), z.lazy(() => ConfigurationValueCreateManyOptionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ConfigurationValueCreateManyOptionInputEnvelopeObjectSchema: z.ZodType<Prisma.ConfigurationValueCreateManyOptionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueCreateManyOptionInputEnvelope>;
export const ConfigurationValueCreateManyOptionInputEnvelopeObjectZodSchema = makeSchema();
