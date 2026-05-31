import * as z from 'zod';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemCreateWithoutCartInputObjectSchema as CartItemCreateWithoutCartInputObjectSchema } from './CartItemCreateWithoutCartInput.schema';
import { CartItemUncheckedCreateWithoutCartInputObjectSchema as CartItemUncheckedCreateWithoutCartInputObjectSchema } from './CartItemUncheckedCreateWithoutCartInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => CartItemCreateWithoutCartInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartInputObjectSchema)])
}).strict();
export const CartItemCreateOrConnectWithoutCartInputObjectSchema = makeSchema();
export const CartItemCreateOrConnectWithoutCartInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemCreateOrConnectWithoutCartInput.schema.js.map