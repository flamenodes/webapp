import * as z from 'zod';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceCreateWithoutOrderInputObjectSchema as InvoiceCreateWithoutOrderInputObjectSchema } from './InvoiceCreateWithoutOrderInput.schema';
import { InvoiceUncheckedCreateWithoutOrderInputObjectSchema as InvoiceUncheckedCreateWithoutOrderInputObjectSchema } from './InvoiceUncheckedCreateWithoutOrderInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => InvoiceCreateWithoutOrderInputObjectSchema), z.lazy(() => InvoiceUncheckedCreateWithoutOrderInputObjectSchema)])
}).strict();
export const InvoiceCreateOrConnectWithoutOrderInputObjectSchema = makeSchema();
export const InvoiceCreateOrConnectWithoutOrderInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceCreateOrConnectWithoutOrderInput.schema.js.map