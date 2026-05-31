import * as z from 'zod';
import { ProductCreateWithoutBillingOptionsInputObjectSchema as ProductCreateWithoutBillingOptionsInputObjectSchema } from './ProductCreateWithoutBillingOptionsInput.schema';
import { ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema as ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema } from './ProductUncheckedCreateWithoutBillingOptionsInput.schema';
import { ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema as ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema } from './ProductCreateOrConnectWithoutBillingOptionsInput.schema';
import { ProductUpsertWithoutBillingOptionsInputObjectSchema as ProductUpsertWithoutBillingOptionsInputObjectSchema } from './ProductUpsertWithoutBillingOptionsInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutBillingOptionsInputObjectSchema as ProductUpdateToOneWithWhereWithoutBillingOptionsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutBillingOptionsInput.schema';
import { ProductUpdateWithoutBillingOptionsInputObjectSchema as ProductUpdateWithoutBillingOptionsInputObjectSchema } from './ProductUpdateWithoutBillingOptionsInput.schema';
import { ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema as ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema } from './ProductUncheckedUpdateWithoutBillingOptionsInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutBillingOptionsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema).optional(),
    upsert: z.lazy(() => ProductUpsertWithoutBillingOptionsInputObjectSchema).optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutBillingOptionsInputObjectSchema), z.lazy(() => ProductUpdateWithoutBillingOptionsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutBillingOptionsNestedInputObjectSchema = makeSchema();
export const ProductUpdateOneRequiredWithoutBillingOptionsNestedInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductUpdateOneRequiredWithoutBillingOptionsNestedInput.schema.js.map