import * as z from 'zod';
import { OrderItemScalarWhereInputObjectSchema as OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';
import { OrderItemUpdateManyMutationInputObjectSchema as OrderItemUpdateManyMutationInputObjectSchema } from './OrderItemUpdateManyMutationInput.schema';
import { OrderItemUncheckedUpdateManyWithoutOrderInputObjectSchema as OrderItemUncheckedUpdateManyWithoutOrderInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutOrderInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderItemScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => OrderItemUpdateManyMutationInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderInputObjectSchema)])
}).strict();
export const OrderItemUpdateManyWithWhereWithoutOrderInputObjectSchema = makeSchema();
export const OrderItemUpdateManyWithWhereWithoutOrderInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemUpdateManyWithWhereWithoutOrderInput.schema.js.map