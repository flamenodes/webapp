import * as z from 'zod';
import { ProductCreateWithoutDiscountInputObjectSchema as ProductCreateWithoutDiscountInputObjectSchema } from './ProductCreateWithoutDiscountInput.schema';
import { ProductUncheckedCreateWithoutDiscountInputObjectSchema as ProductUncheckedCreateWithoutDiscountInputObjectSchema } from './ProductUncheckedCreateWithoutDiscountInput.schema';
import { ProductCreateOrConnectWithoutDiscountInputObjectSchema as ProductCreateOrConnectWithoutDiscountInputObjectSchema } from './ProductCreateOrConnectWithoutDiscountInput.schema';
import { ProductUpsertWithWhereUniqueWithoutDiscountInputObjectSchema as ProductUpsertWithWhereUniqueWithoutDiscountInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutDiscountInput.schema';
import { ProductCreateManyDiscountInputEnvelopeObjectSchema as ProductCreateManyDiscountInputEnvelopeObjectSchema } from './ProductCreateManyDiscountInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutDiscountInputObjectSchema as ProductUpdateWithWhereUniqueWithoutDiscountInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutDiscountInput.schema';
import { ProductUpdateManyWithWhereWithoutDiscountInputObjectSchema as ProductUpdateManyWithWhereWithoutDiscountInputObjectSchema } from './ProductUpdateManyWithWhereWithoutDiscountInput.schema';
import { ProductScalarWhereInputObjectSchema as ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutDiscountInputObjectSchema), z.lazy(() => ProductCreateWithoutDiscountInputObjectSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutDiscountInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDiscountInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutDiscountInputObjectSchema), z.lazy(() => ProductCreateOrConnectWithoutDiscountInputObjectSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => ProductUpsertWithWhereUniqueWithoutDiscountInputObjectSchema), z.lazy(() => ProductUpsertWithWhereUniqueWithoutDiscountInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => ProductCreateManyDiscountInputEnvelopeObjectSchema).optional(),
    set: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
    delete: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
    connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
    update: z.union([z.lazy(() => ProductUpdateWithWhereUniqueWithoutDiscountInputObjectSchema), z.lazy(() => ProductUpdateWithWhereUniqueWithoutDiscountInputObjectSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => ProductUpdateManyWithWhereWithoutDiscountInputObjectSchema), z.lazy(() => ProductUpdateManyWithWhereWithoutDiscountInputObjectSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema), z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductUpdateManyWithoutDiscountNestedInputObjectSchema = makeSchema();
export const ProductUpdateManyWithoutDiscountNestedInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductUpdateManyWithoutDiscountNestedInput.schema.js.map