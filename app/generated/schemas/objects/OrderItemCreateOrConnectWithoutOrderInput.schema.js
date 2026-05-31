import * as z from 'zod';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutOrderInputObjectSchema as OrderItemCreateWithoutOrderInputObjectSchema } from './OrderItemCreateWithoutOrderInput.schema';
import { OrderItemUncheckedCreateWithoutOrderInputObjectSchema as OrderItemUncheckedCreateWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrderInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => OrderItemCreateWithoutOrderInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputObjectSchema)])
}).strict();
export const OrderItemCreateOrConnectWithoutOrderInputObjectSchema = makeSchema();
export const OrderItemCreateOrConnectWithoutOrderInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemCreateOrConnectWithoutOrderInput.schema.js.map