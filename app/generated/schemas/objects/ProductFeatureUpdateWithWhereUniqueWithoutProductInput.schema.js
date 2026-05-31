import * as z from 'zod';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './ProductFeatureWhereUniqueInput.schema';
import { ProductFeatureUpdateWithoutProductInputObjectSchema as ProductFeatureUpdateWithoutProductInputObjectSchema } from './ProductFeatureUpdateWithoutProductInput.schema';
import { ProductFeatureUncheckedUpdateWithoutProductInputObjectSchema as ProductFeatureUncheckedUpdateWithoutProductInputObjectSchema } from './ProductFeatureUncheckedUpdateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => ProductFeatureUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const ProductFeatureUpdateWithWhereUniqueWithoutProductInputObjectSchema = makeSchema();
export const ProductFeatureUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureUpdateWithWhereUniqueWithoutProductInput.schema.js.map