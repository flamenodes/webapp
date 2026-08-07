import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { InvoiceCreateWithoutOrderInputObjectSchema as InvoiceCreateWithoutOrderInputObjectSchema } from './InvoiceCreateWithoutOrderInput.schema';
import { InvoiceUncheckedCreateWithoutOrderInputObjectSchema as InvoiceUncheckedCreateWithoutOrderInputObjectSchema } from './InvoiceUncheckedCreateWithoutOrderInput.schema';
import { InvoiceCreateOrConnectWithoutOrderInputObjectSchema as InvoiceCreateOrConnectWithoutOrderInputObjectSchema } from './InvoiceCreateOrConnectWithoutOrderInput.schema';
import { InvoiceUpsertWithoutOrderInputObjectSchema as InvoiceUpsertWithoutOrderInputObjectSchema } from './InvoiceUpsertWithoutOrderInput.schema';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateToOneWithWhereWithoutOrderInputObjectSchema as InvoiceUpdateToOneWithWhereWithoutOrderInputObjectSchema } from './InvoiceUpdateToOneWithWhereWithoutOrderInput.schema';
import { InvoiceUpdateWithoutOrderInputObjectSchema as InvoiceUpdateWithoutOrderInputObjectSchema } from './InvoiceUpdateWithoutOrderInput.schema';
import { InvoiceUncheckedUpdateWithoutOrderInputObjectSchema as InvoiceUncheckedUpdateWithoutOrderInputObjectSchema } from './InvoiceUncheckedUpdateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InvoiceCreateWithoutOrderInputObjectSchema), z.lazy(() => InvoiceUncheckedCreateWithoutOrderInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutOrderInputObjectSchema).optional(),
  upsert: z.lazy(() => InvoiceUpsertWithoutOrderInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => InvoiceWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => InvoiceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => InvoiceUpdateToOneWithWhereWithoutOrderInputObjectSchema), z.lazy(() => InvoiceUpdateWithoutOrderInputObjectSchema), z.lazy(() => InvoiceUncheckedUpdateWithoutOrderInputObjectSchema)]).optional()
}).strict();
export const InvoiceUpdateOneWithoutOrderNestedInputObjectSchema: z.ZodType<Prisma.InvoiceUpdateOneWithoutOrderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceUpdateOneWithoutOrderNestedInput>;
export const InvoiceUpdateOneWithoutOrderNestedInputObjectZodSchema = makeSchema();
