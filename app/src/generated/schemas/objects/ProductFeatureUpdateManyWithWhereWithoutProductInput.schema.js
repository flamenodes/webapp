import * as z from 'zod';
import { ProductFeatureScalarWhereInputObjectSchema as ProductFeatureScalarWhereInputObjectSchema } from './ProductFeatureScalarWhereInput.schema';
import { ProductFeatureUpdateManyMutationInputObjectSchema as ProductFeatureUpdateManyMutationInputObjectSchema } from './ProductFeatureUpdateManyMutationInput.schema';
import { ProductFeatureUncheckedUpdateManyWithoutProductInputObjectSchema as ProductFeatureUncheckedUpdateManyWithoutProductInputObjectSchema } from './ProductFeatureUncheckedUpdateManyWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductFeatureScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => ProductFeatureUpdateManyMutationInputObjectSchema), z.lazy(() => ProductFeatureUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const ProductFeatureUpdateManyWithWhereWithoutProductInputObjectSchema = makeSchema();
export const ProductFeatureUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureUpdateManyWithWhereWithoutProductInput.schema.js.map