import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { InvoiceCreateWithoutOrderInputObjectSchema as InvoiceCreateWithoutOrderInputObjectSchema } from './InvoiceCreateWithoutOrderInput.schema';
import { InvoiceUncheckedCreateWithoutOrderInputObjectSchema as InvoiceUncheckedCreateWithoutOrderInputObjectSchema } from './InvoiceUncheckedCreateWithoutOrderInput.schema';
import { InvoiceCreateOrConnectWithoutOrderInputObjectSchema as InvoiceCreateOrConnectWithoutOrderInputObjectSchema } from './InvoiceCreateOrConnectWithoutOrderInput.schema';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InvoiceCreateWithoutOrderInputObjectSchema), z.lazy(() => InvoiceUncheckedCreateWithoutOrderInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutOrderInputObjectSchema).optional(),
  connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const InvoiceCreateNestedOneWithoutOrderInputObjectSchema: z.ZodType<Prisma.InvoiceCreateNestedOneWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateNestedOneWithoutOrderInput>;
export const InvoiceCreateNestedOneWithoutOrderInputObjectZodSchema = makeSchema();
