import * as z from 'zod';
import { ProductBillingOptionScalarWhereInputObjectSchema as ProductBillingOptionScalarWhereInputObjectSchema } from './ProductBillingOptionScalarWhereInput.schema';
import { ProductBillingOptionUpdateManyMutationInputObjectSchema as ProductBillingOptionUpdateManyMutationInputObjectSchema } from './ProductBillingOptionUpdateManyMutationInput.schema';
import { ProductBillingOptionUncheckedUpdateManyWithoutProductInputObjectSchema as ProductBillingOptionUncheckedUpdateManyWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedUpdateManyWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductBillingOptionScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => ProductBillingOptionUpdateManyMutationInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const ProductBillingOptionUpdateManyWithWhereWithoutProductInputObjectSchema = makeSchema();
export const ProductBillingOptionUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionUpdateManyWithWhereWithoutProductInput.schema.js.map