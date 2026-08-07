import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderCreateWithoutInvoiceInputObjectSchema as OrderCreateWithoutInvoiceInputObjectSchema } from './OrderCreateWithoutInvoiceInput.schema';
import { OrderUncheckedCreateWithoutInvoiceInputObjectSchema as OrderUncheckedCreateWithoutInvoiceInputObjectSchema } from './OrderUncheckedCreateWithoutInvoiceInput.schema';
import { OrderCreateOrConnectWithoutInvoiceInputObjectSchema as OrderCreateOrConnectWithoutInvoiceInputObjectSchema } from './OrderCreateOrConnectWithoutInvoiceInput.schema';
import { OrderUpsertWithoutInvoiceInputObjectSchema as OrderUpsertWithoutInvoiceInputObjectSchema } from './OrderUpsertWithoutInvoiceInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateToOneWithWhereWithoutInvoiceInputObjectSchema as OrderUpdateToOneWithWhereWithoutInvoiceInputObjectSchema } from './OrderUpdateToOneWithWhereWithoutInvoiceInput.schema';
import { OrderUpdateWithoutInvoiceInputObjectSchema as OrderUpdateWithoutInvoiceInputObjectSchema } from './OrderUpdateWithoutInvoiceInput.schema';
import { OrderUncheckedUpdateWithoutInvoiceInputObjectSchema as OrderUncheckedUpdateWithoutInvoiceInputObjectSchema } from './OrderUncheckedUpdateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutInvoiceInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutInvoiceInputObjectSchema).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutInvoiceInputObjectSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrderUpdateToOneWithWhereWithoutInvoiceInputObjectSchema), z.lazy(() => OrderUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutInvoiceInputObjectSchema)]).optional()
}).strict();
export const OrderUpdateOneRequiredWithoutInvoiceNestedInputObjectSchema: z.ZodType<Prisma.OrderUpdateOneRequiredWithoutInvoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateOneRequiredWithoutInvoiceNestedInput>;
export const OrderUpdateOneRequiredWithoutInvoiceNestedInputObjectZodSchema = makeSchema();
