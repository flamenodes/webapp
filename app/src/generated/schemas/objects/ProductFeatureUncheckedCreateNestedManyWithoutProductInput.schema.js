import * as z from 'zod';
import { ProductFeatureCreateWithoutProductInputObjectSchema as ProductFeatureCreateWithoutProductInputObjectSchema } from './ProductFeatureCreateWithoutProductInput.schema';
import { ProductFeatureUncheckedCreateWithoutProductInputObjectSchema as ProductFeatureUncheckedCreateWithoutProductInputObjectSchema } from './ProductFeatureUncheckedCreateWithoutProductInput.schema';
import { ProductFeatureCreateOrConnectWithoutProductInputObjectSchema as ProductFeatureCreateOrConnectWithoutProductInputObjectSchema } from './ProductFeatureCreateOrConnectWithoutProductInput.schema';
import { ProductFeatureCreateManyProductInputEnvelopeObjectSchema as ProductFeatureCreateManyProductInputEnvelopeObjectSchema } from './ProductFeatureCreateManyProductInputEnvelope.schema';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './ProductFeatureWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ProductFeatureCreateWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ProductFeatureUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ProductFeatureCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => ProductFeatureCreateManyProductInputEnvelopeObjectSchema).optional(),
    connect: z.union([z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema), z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductFeatureUncheckedCreateNestedManyWithoutProductInputObjectSchema = makeSchema();
export const ProductFeatureUncheckedCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureUncheckedCreateNestedManyWithoutProductInput.schema.js.map