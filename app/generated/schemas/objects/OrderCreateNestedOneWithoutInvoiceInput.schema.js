import * as z from 'zod';
import { OrderCreateWithoutInvoiceInputObjectSchema as OrderCreateWithoutInvoiceInputObjectSchema } from './OrderCreateWithoutInvoiceInput.schema';
import { OrderUncheckedCreateWithoutInvoiceInputObjectSchema as OrderUncheckedCreateWithoutInvoiceInputObjectSchema } from './OrderUncheckedCreateWithoutInvoiceInput.schema';
import { OrderCreateOrConnectWithoutInvoiceInputObjectSchema as OrderCreateOrConnectWithoutInvoiceInputObjectSchema } from './OrderCreateOrConnectWithoutInvoiceInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => OrderCreateWithoutInvoiceInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutInvoiceInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutInvoiceInputObjectSchema).optional(),
    connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrderCreateNestedOneWithoutInvoiceInputObjectSchema = makeSchema();
export const OrderCreateNestedOneWithoutInvoiceInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCreateNestedOneWithoutInvoiceInput.schema.js.map