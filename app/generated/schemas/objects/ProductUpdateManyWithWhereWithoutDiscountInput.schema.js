import * as z from 'zod';
import { ProductScalarWhereInputObjectSchema as ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema as ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutDiscountInputObjectSchema as ProductUncheckedUpdateManyWithoutDiscountInputObjectSchema } from './ProductUncheckedUpdateManyWithoutDiscountInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => ProductUpdateManyMutationInputObjectSchema), z.lazy(() => ProductUncheckedUpdateManyWithoutDiscountInputObjectSchema)])
}).strict();
export const ProductUpdateManyWithWhereWithoutDiscountInputObjectSchema = makeSchema();
export const ProductUpdateManyWithWhereWithoutDiscountInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductUpdateManyWithWhereWithoutDiscountInput.schema.js.map