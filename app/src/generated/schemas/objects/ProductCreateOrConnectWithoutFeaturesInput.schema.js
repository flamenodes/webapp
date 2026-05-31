import * as z from 'zod';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutFeaturesInputObjectSchema as ProductCreateWithoutFeaturesInputObjectSchema } from './ProductCreateWithoutFeaturesInput.schema';
import { ProductUncheckedCreateWithoutFeaturesInputObjectSchema as ProductUncheckedCreateWithoutFeaturesInputObjectSchema } from './ProductUncheckedCreateWithoutFeaturesInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => ProductCreateWithoutFeaturesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutFeaturesInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutFeaturesInputObjectSchema = makeSchema();
export const ProductCreateOrConnectWithoutFeaturesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCreateOrConnectWithoutFeaturesInput.schema.js.map