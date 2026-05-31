import * as z from 'zod';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderUpdateWithoutItemsInputObjectSchema as OrderUpdateWithoutItemsInputObjectSchema } from './OrderUpdateWithoutItemsInput.schema';
import { OrderUncheckedUpdateWithoutItemsInputObjectSchema as OrderUncheckedUpdateWithoutItemsInputObjectSchema } from './OrderUncheckedUpdateWithoutItemsInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => OrderUpdateWithoutItemsInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const OrderUpdateToOneWithWhereWithoutItemsInputObjectSchema = makeSchema();
export const OrderUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderUpdateToOneWithWhereWithoutItemsInput.schema.js.map