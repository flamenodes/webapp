import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutFeaturesInputObjectSchema as ProductUpdateWithoutFeaturesInputObjectSchema } from './ProductUpdateWithoutFeaturesInput.schema';
import { ProductUncheckedUpdateWithoutFeaturesInputObjectSchema as ProductUncheckedUpdateWithoutFeaturesInputObjectSchema } from './ProductUncheckedUpdateWithoutFeaturesInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => ProductUpdateWithoutFeaturesInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutFeaturesInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutFeaturesInputObjectSchema = makeSchema();
export const ProductUpdateToOneWithWhereWithoutFeaturesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductUpdateToOneWithWhereWithoutFeaturesInput.schema.js.map