import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutBillingOptionsInputObjectSchema as ProductUpdateWithoutBillingOptionsInputObjectSchema } from './ProductUpdateWithoutBillingOptionsInput.schema';
import { ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema as ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema } from './ProductUncheckedUpdateWithoutBillingOptionsInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => ProductUpdateWithoutBillingOptionsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutBillingOptionsInputObjectSchema = makeSchema();
export const ProductUpdateToOneWithWhereWithoutBillingOptionsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductUpdateToOneWithWhereWithoutBillingOptionsInput.schema.js.map