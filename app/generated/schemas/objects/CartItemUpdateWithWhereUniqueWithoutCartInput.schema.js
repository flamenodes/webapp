import * as z from 'zod';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutCartInputObjectSchema as CartItemUpdateWithoutCartInputObjectSchema } from './CartItemUpdateWithoutCartInput.schema';
import { CartItemUncheckedUpdateWithoutCartInputObjectSchema as CartItemUncheckedUpdateWithoutCartInputObjectSchema } from './CartItemUncheckedUpdateWithoutCartInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => CartItemUpdateWithoutCartInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutCartInputObjectSchema)])
}).strict();
export const CartItemUpdateWithWhereUniqueWithoutCartInputObjectSchema = makeSchema();
export const CartItemUpdateWithWhereUniqueWithoutCartInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemUpdateWithWhereUniqueWithoutCartInput.schema.js.map