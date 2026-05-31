import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema'

const makeSchema = () => z.object({
  order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional()
}).strict();
export const InvoiceIncludeObjectSchema: z.ZodType<Prisma.InvoiceInclude> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceInclude>;
export const InvoiceIncludeObjectZodSchema = makeSchema();
