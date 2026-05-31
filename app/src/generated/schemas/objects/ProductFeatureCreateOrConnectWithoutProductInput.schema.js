import * as z from 'zod';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './ProductFeatureWhereUniqueInput.schema';
import { ProductFeatureCreateWithoutProductInputObjectSchema as ProductFeatureCreateWithoutProductInputObjectSchema } from './ProductFeatureCreateWithoutProductInput.schema';
import { ProductFeatureUncheckedCreateWithoutProductInputObjectSchema as ProductFeatureUncheckedCreateWithoutProductInputObjectSchema } from './ProductFeatureUncheckedCreateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => ProductFeatureCreateWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductFeatureCreateOrConnectWithoutProductInputObjectSchema = makeSchema();
export const ProductFeatureCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureCreateOrConnectWithoutProductInput.schema.js.map