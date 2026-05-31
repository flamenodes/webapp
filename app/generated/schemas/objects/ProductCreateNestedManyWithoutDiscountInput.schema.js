import * as z from 'zod';
import { ProductCreateWithoutDiscountInputObjectSchema as ProductCreateWithoutDiscountInputObjectSchema } from './ProductCreateWithoutDiscountInput.schema';
import { ProductUncheckedCreateWithoutDiscountInputObjectSchema as ProductUncheckedCreateWithoutDiscountInputObjectSchema } from './ProductUncheckedCreateWithoutDiscountInput.schema';
import { ProductCreateOrConnectWithoutDiscountInputObjectSchema as ProductCreateOrConnectWithoutDiscountInputObjectSchema } from './ProductCreateOrConnectWithoutDiscountInput.schema';
import { ProductCreateManyDiscountInputEnvelopeObjectSchema as ProductCreateManyDiscountInputEnvelopeObjectSchema } from './ProductCreateManyDiscountInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutDiscountInputObjectSchema), z.lazy(() => ProductCreateWithoutDiscountInputObjectSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutDiscountInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDiscountInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutDiscountInputObjectSchema), z.lazy(() => ProductCreateOrConnectWithoutDiscountInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => ProductCreateManyDiscountInputEnvelopeObjectSchema).optional(),
    connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductCreateNestedManyWithoutDiscountInputObjectSchema = makeSchema();
export const ProductCreateNestedManyWithoutDiscountInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCreateNestedManyWithoutDiscountInput.schema.js.map