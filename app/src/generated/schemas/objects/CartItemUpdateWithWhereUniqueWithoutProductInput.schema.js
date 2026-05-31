import * as z from 'zod';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutProductInputObjectSchema as CartItemUpdateWithoutProductInputObjectSchema } from './CartItemUpdateWithoutProductInput.schema';
import { CartItemUncheckedUpdateWithoutProductInputObjectSchema as CartItemUncheckedUpdateWithoutProductInputObjectSchema } from './CartItemUncheckedUpdateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => CartItemUpdateWithoutProductInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema = makeSchema();
export const CartItemUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemUpdateWithWhereUniqueWithoutProductInput.schema.js.map