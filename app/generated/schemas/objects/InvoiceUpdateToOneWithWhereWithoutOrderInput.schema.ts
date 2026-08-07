import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema';
import { InvoiceUpdateWithoutOrderInputObjectSchema as InvoiceUpdateWithoutOrderInputObjectSchema } from './InvoiceUpdateWithoutOrderInput.schema';
import { InvoiceUncheckedUpdateWithoutOrderInputObjectSchema as InvoiceUncheckedUpdateWithoutOrderInputObjectSchema } from './InvoiceUncheckedUpdateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvoiceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => InvoiceUpdateWithoutOrderInputObjectSchema), z.lazy(() => InvoiceUncheckedUpdateWithoutOrderInputObjectSchema)])
}).strict();
export const InvoiceUpdateToOneWithWhereWithoutOrderInputObjectSchema: z.ZodType<Prisma.InvoiceUpdateToOneWithWhereWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceUpdateToOneWithWhereWithoutOrderInput>;
export const InvoiceUpdateToOneWithWhereWithoutOrderInputObjectZodSchema = makeSchema();
