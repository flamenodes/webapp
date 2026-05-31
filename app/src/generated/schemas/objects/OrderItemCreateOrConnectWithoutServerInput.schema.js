import * as z from 'zod';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutServerInputObjectSchema as OrderItemCreateWithoutServerInputObjectSchema } from './OrderItemCreateWithoutServerInput.schema';
import { OrderItemUncheckedCreateWithoutServerInputObjectSchema as OrderItemUncheckedCreateWithoutServerInputObjectSchema } from './OrderItemUncheckedCreateWithoutServerInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => OrderItemCreateWithoutServerInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const OrderItemCreateOrConnectWithoutServerInputObjectSchema = makeSchema();
export const OrderItemCreateOrConnectWithoutServerInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemCreateOrConnectWithoutServerInput.schema.js.map