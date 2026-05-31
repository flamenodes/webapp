import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutOrderItemsInputObjectSchema as ProductUpdateWithoutOrderItemsInputObjectSchema } from './ProductUpdateWithoutOrderItemsInput.schema';
import { ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema as ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutOrderItemsInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => ProductUpdateWithoutOrderItemsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutOrderItemsInputObjectSchema = makeSchema();
export const ProductUpdateToOneWithWhereWithoutOrderItemsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductUpdateToOneWithWhereWithoutOrderItemsInput.schema.js.map