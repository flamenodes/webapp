import * as z from 'zod';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutProductInputObjectSchema as OrderItemCreateWithoutProductInputObjectSchema } from './OrderItemCreateWithoutProductInput.schema';
import { OrderItemUncheckedCreateWithoutProductInputObjectSchema as OrderItemUncheckedCreateWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => OrderItemCreateWithoutProductInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const OrderItemCreateOrConnectWithoutProductInputObjectSchema = makeSchema();
export const OrderItemCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemCreateOrConnectWithoutProductInput.schema.js.map