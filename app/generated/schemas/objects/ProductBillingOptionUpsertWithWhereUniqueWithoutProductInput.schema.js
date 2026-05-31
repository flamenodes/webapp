import * as z from 'zod';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './ProductBillingOptionWhereUniqueInput.schema';
import { ProductBillingOptionUpdateWithoutProductInputObjectSchema as ProductBillingOptionUpdateWithoutProductInputObjectSchema } from './ProductBillingOptionUpdateWithoutProductInput.schema';
import { ProductBillingOptionUncheckedUpdateWithoutProductInputObjectSchema as ProductBillingOptionUncheckedUpdateWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedUpdateWithoutProductInput.schema';
import { ProductBillingOptionCreateWithoutProductInputObjectSchema as ProductBillingOptionCreateWithoutProductInputObjectSchema } from './ProductBillingOptionCreateWithoutProductInput.schema';
import { ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema as ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedCreateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => ProductBillingOptionUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedUpdateWithoutProductInputObjectSchema)]),
    create: z.union([z.lazy(() => ProductBillingOptionCreateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductBillingOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema = makeSchema();
export const ProductBillingOptionUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionUpsertWithWhereUniqueWithoutProductInput.schema.js.map