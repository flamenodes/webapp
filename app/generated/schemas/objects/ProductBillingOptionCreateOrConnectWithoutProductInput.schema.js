import * as z from 'zod';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './ProductBillingOptionWhereUniqueInput.schema';
import { ProductBillingOptionCreateWithoutProductInputObjectSchema as ProductBillingOptionCreateWithoutProductInputObjectSchema } from './ProductBillingOptionCreateWithoutProductInput.schema';
import { ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema as ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedCreateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => ProductBillingOptionCreateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema = makeSchema();
export const ProductBillingOptionCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionCreateOrConnectWithoutProductInput.schema.js.map