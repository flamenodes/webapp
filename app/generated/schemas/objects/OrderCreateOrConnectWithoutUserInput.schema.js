import * as z from 'zod';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutUserInputObjectSchema as OrderCreateWithoutUserInputObjectSchema } from './OrderCreateWithoutUserInput.schema';
import { OrderUncheckedCreateWithoutUserInputObjectSchema as OrderUncheckedCreateWithoutUserInputObjectSchema } from './OrderUncheckedCreateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => OrderCreateWithoutUserInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutUserInputObjectSchema = makeSchema();
export const OrderCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCreateOrConnectWithoutUserInput.schema.js.map