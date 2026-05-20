import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ServerCreateManyUserInputObjectSchema as ServerCreateManyUserInputObjectSchema } from './ServerCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ServerCreateManyUserInputObjectSchema), z.lazy(() => ServerCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ServerCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ServerCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateManyUserInputEnvelope>;
export const ServerCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
