import * as z from 'zod';
import { ProductBillingOptionCreateWithoutProductInputObjectSchema as ProductBillingOptionCreateWithoutProductInputObjectSchema } from './ProductBillingOptionCreateWithoutProductInput.schema';
import { ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema as ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedCreateWithoutProductInput.schema';
import { ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema as ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema } from './ProductBillingOptionCreateOrConnectWithoutProductInput.schema';
import { ProductBillingOptionCreateManyProductInputEnvelopeObjectSchema as ProductBillingOptionCreateManyProductInputEnvelopeObjectSchema } from './ProductBillingOptionCreateManyProductInputEnvelope.schema';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './ProductBillingOptionWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ProductBillingOptionCreateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => ProductBillingOptionCreateManyProductInputEnvelopeObjectSchema).optional(),
    connect: z.union([z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema), z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema = makeSchema();
export const ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionUncheckedCreateNestedManyWithoutProductInput.schema.js.map