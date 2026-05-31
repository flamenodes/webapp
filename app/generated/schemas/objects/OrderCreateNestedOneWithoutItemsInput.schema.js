import * as z from 'zod';
import { OrderCreateWithoutItemsInputObjectSchema as OrderCreateWithoutItemsInputObjectSchema } from './OrderCreateWithoutItemsInput.schema';
import { OrderUncheckedCreateWithoutItemsInputObjectSchema as OrderUncheckedCreateWithoutItemsInputObjectSchema } from './OrderUncheckedCreateWithoutItemsInput.schema';
import { OrderCreateOrConnectWithoutItemsInputObjectSchema as OrderCreateOrConnectWithoutItemsInputObjectSchema } from './OrderCreateOrConnectWithoutItemsInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => OrderCreateWithoutItemsInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutItemsInputObjectSchema).optional(),
    connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrderCreateNestedOneWithoutItemsInputObjectSchema = makeSchema();
export const OrderCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCreateNestedOneWithoutItemsInput.schema.js.map