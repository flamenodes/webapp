import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { InvoiceUpdateWithoutOrderInputObjectSchema as InvoiceUpdateWithoutOrderInputObjectSchema } from './InvoiceUpdateWithoutOrderInput.schema';
import { InvoiceUncheckedUpdateWithoutOrderInputObjectSchema as InvoiceUncheckedUpdateWithoutOrderInputObjectSchema } from './InvoiceUncheckedUpdateWithoutOrderInput.schema';
import { InvoiceCreateWithoutOrderInputObjectSchema as InvoiceCreateWithoutOrderInputObjectSchema } from './InvoiceCreateWithoutOrderInput.schema';
import { InvoiceUncheckedCreateWithoutOrderInputObjectSchema as InvoiceUncheckedCreateWithoutOrderInputObjectSchema } from './InvoiceUncheckedCreateWithoutOrderInput.schema';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => InvoiceUpdateWithoutOrderInputObjectSchema), z.lazy(() => InvoiceUncheckedUpdateWithoutOrderInputObjectSchema)]),
  create: z.union([z.lazy(() => InvoiceCreateWithoutOrderInputObjectSchema), z.lazy(() => InvoiceUncheckedCreateWithoutOrderInputObjectSchema)]),
  where: z.lazy(() => InvoiceWhereInputObjectSchema).optional()
}).strict();
export const InvoiceUpsertWithoutOrderInputObjectSchema: z.ZodType<Prisma.InvoiceUpsertWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceUpsertWithoutOrderInput>;
export const InvoiceUpsertWithoutOrderInputObjectZodSchema = makeSchema();
