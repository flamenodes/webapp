import * as z from 'zod';
import { OrderItemCreateWithoutServerInputObjectSchema as OrderItemCreateWithoutServerInputObjectSchema } from './OrderItemCreateWithoutServerInput.schema';
import { OrderItemUncheckedCreateWithoutServerInputObjectSchema as OrderItemUncheckedCreateWithoutServerInputObjectSchema } from './OrderItemUncheckedCreateWithoutServerInput.schema';
import { OrderItemCreateOrConnectWithoutServerInputObjectSchema as OrderItemCreateOrConnectWithoutServerInputObjectSchema } from './OrderItemCreateOrConnectWithoutServerInput.schema';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => OrderItemCreateWithoutServerInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutServerInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => OrderItemCreateOrConnectWithoutServerInputObjectSchema).optional(),
    connect: z.lazy(() => OrderItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrderItemCreateNestedOneWithoutServerInputObjectSchema = makeSchema();
export const OrderItemCreateNestedOneWithoutServerInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemCreateNestedOneWithoutServerInput.schema.js.map