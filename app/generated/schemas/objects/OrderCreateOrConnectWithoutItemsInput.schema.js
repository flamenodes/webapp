import * as z from 'zod';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutItemsInputObjectSchema as OrderCreateWithoutItemsInputObjectSchema } from './OrderCreateWithoutItemsInput.schema';
import { OrderUncheckedCreateWithoutItemsInputObjectSchema as OrderUncheckedCreateWithoutItemsInputObjectSchema } from './OrderUncheckedCreateWithoutItemsInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => OrderCreateWithoutItemsInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutItemsInputObjectSchema = makeSchema();
export const OrderCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCreateOrConnectWithoutItemsInput.schema.js.map