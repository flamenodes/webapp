import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderCreateManyRenewalForServerInputObjectSchema as OrderCreateManyRenewalForServerInputObjectSchema } from './OrderCreateManyRenewalForServerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrderCreateManyRenewalForServerInputObjectSchema), z.lazy(() => OrderCreateManyRenewalForServerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrderCreateManyRenewalForServerInputEnvelopeObjectSchema: z.ZodType<Prisma.OrderCreateManyRenewalForServerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateManyRenewalForServerInputEnvelope>;
export const OrderCreateManyRenewalForServerInputEnvelopeObjectZodSchema = makeSchema();
