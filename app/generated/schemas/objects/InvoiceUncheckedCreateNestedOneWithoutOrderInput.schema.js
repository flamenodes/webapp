import * as z from 'zod';
import { InvoiceCreateWithoutOrderInputObjectSchema as InvoiceCreateWithoutOrderInputObjectSchema } from './InvoiceCreateWithoutOrderInput.schema';
import { InvoiceUncheckedCreateWithoutOrderInputObjectSchema as InvoiceUncheckedCreateWithoutOrderInputObjectSchema } from './InvoiceUncheckedCreateWithoutOrderInput.schema';
import { InvoiceCreateOrConnectWithoutOrderInputObjectSchema as InvoiceCreateOrConnectWithoutOrderInputObjectSchema } from './InvoiceCreateOrConnectWithoutOrderInput.schema';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => InvoiceCreateWithoutOrderInputObjectSchema), z.lazy(() => InvoiceUncheckedCreateWithoutOrderInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutOrderInputObjectSchema).optional(),
    connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const InvoiceUncheckedCreateNestedOneWithoutOrderInputObjectSchema = makeSchema();
export const InvoiceUncheckedCreateNestedOneWithoutOrderInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceUncheckedCreateNestedOneWithoutOrderInput.schema.js.map