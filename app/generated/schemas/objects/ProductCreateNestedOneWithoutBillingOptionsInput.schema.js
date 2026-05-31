import * as z from 'zod';
import { ProductCreateWithoutBillingOptionsInputObjectSchema as ProductCreateWithoutBillingOptionsInputObjectSchema } from './ProductCreateWithoutBillingOptionsInput.schema';
import { ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema as ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema } from './ProductUncheckedCreateWithoutBillingOptionsInput.schema';
import { ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema as ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema } from './ProductCreateOrConnectWithoutBillingOptionsInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutBillingOptionsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema).optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutBillingOptionsInputObjectSchema = makeSchema();
export const ProductCreateNestedOneWithoutBillingOptionsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCreateNestedOneWithoutBillingOptionsInput.schema.js.map