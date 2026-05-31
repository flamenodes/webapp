import * as z from 'zod';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './ProductFeatureWhereUniqueInput.schema';
import { ProductFeatureUpdateWithoutProductInputObjectSchema as ProductFeatureUpdateWithoutProductInputObjectSchema } from './ProductFeatureUpdateWithoutProductInput.schema';
import { ProductFeatureUncheckedUpdateWithoutProductInputObjectSchema as ProductFeatureUncheckedUpdateWithoutProductInputObjectSchema } from './ProductFeatureUncheckedUpdateWithoutProductInput.schema';
import { ProductFeatureCreateWithoutProductInputObjectSchema as ProductFeatureCreateWithoutProductInputObjectSchema } from './ProductFeatureCreateWithoutProductInput.schema';
import { ProductFeatureUncheckedCreateWithoutProductInputObjectSchema as ProductFeatureUncheckedCreateWithoutProductInputObjectSchema } from './ProductFeatureUncheckedCreateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => ProductFeatureUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUncheckedUpdateWithoutProductInputObjectSchema)]),
    create: z.union([z.lazy(() => ProductFeatureCreateWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductFeatureUpsertWithWhereUniqueWithoutProductInputObjectSchema = makeSchema();
export const ProductFeatureUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureUpsertWithWhereUniqueWithoutProductInput.schema.js.map