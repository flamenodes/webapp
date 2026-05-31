import * as z from 'zod';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutOrderInputObjectSchema as OrderItemUpdateWithoutOrderInputObjectSchema } from './OrderItemUpdateWithoutOrderInput.schema';
import { OrderItemUncheckedUpdateWithoutOrderInputObjectSchema as OrderItemUncheckedUpdateWithoutOrderInputObjectSchema } from './OrderItemUncheckedUpdateWithoutOrderInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => OrderItemUpdateWithoutOrderInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutOrderInputObjectSchema)])
}).strict();
export const OrderItemUpdateWithWhereUniqueWithoutOrderInputObjectSchema = makeSchema();
export const OrderItemUpdateWithWhereUniqueWithoutOrderInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemUpdateWithWhereUniqueWithoutOrderInput.schema.js.map