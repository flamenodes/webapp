import * as z from 'zod';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderUpdateWithoutInvoiceInputObjectSchema as OrderUpdateWithoutInvoiceInputObjectSchema } from './OrderUpdateWithoutInvoiceInput.schema';
import { OrderUncheckedUpdateWithoutInvoiceInputObjectSchema as OrderUncheckedUpdateWithoutInvoiceInputObjectSchema } from './OrderUncheckedUpdateWithoutInvoiceInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => OrderUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutInvoiceInputObjectSchema)])
}).strict();
export const OrderUpdateToOneWithWhereWithoutInvoiceInputObjectSchema = makeSchema();
export const OrderUpdateToOneWithWhereWithoutInvoiceInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderUpdateToOneWithWhereWithoutInvoiceInput.schema.js.map