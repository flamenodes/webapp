import * as z from 'zod';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemCreateWithoutProductInputObjectSchema as CartItemCreateWithoutProductInputObjectSchema } from './CartItemCreateWithoutProductInput.schema';
import { CartItemUncheckedCreateWithoutProductInputObjectSchema as CartItemUncheckedCreateWithoutProductInputObjectSchema } from './CartItemUncheckedCreateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => CartItemCreateWithoutProductInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const CartItemCreateOrConnectWithoutProductInputObjectSchema = makeSchema();
export const CartItemCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemCreateOrConnectWithoutProductInput.schema.js.map