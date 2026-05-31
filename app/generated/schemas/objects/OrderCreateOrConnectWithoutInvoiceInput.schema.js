import * as z from 'zod';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutInvoiceInputObjectSchema as OrderCreateWithoutInvoiceInputObjectSchema } from './OrderCreateWithoutInvoiceInput.schema';
import { OrderUncheckedCreateWithoutInvoiceInputObjectSchema as OrderUncheckedCreateWithoutInvoiceInputObjectSchema } from './OrderUncheckedCreateWithoutInvoiceInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => OrderCreateWithoutInvoiceInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutInvoiceInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutInvoiceInputObjectSchema = makeSchema();
export const OrderCreateOrConnectWithoutInvoiceInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCreateOrConnectWithoutInvoiceInput.schema.js.map