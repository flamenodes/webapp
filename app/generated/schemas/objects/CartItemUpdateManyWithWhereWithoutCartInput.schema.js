import * as z from 'zod';
import { CartItemScalarWhereInputObjectSchema as CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema';
import { CartItemUpdateManyMutationInputObjectSchema as CartItemUpdateManyMutationInputObjectSchema } from './CartItemUpdateManyMutationInput.schema';
import { CartItemUncheckedUpdateManyWithoutCartInputObjectSchema as CartItemUncheckedUpdateManyWithoutCartInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutCartInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CartItemScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => CartItemUpdateManyMutationInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateManyWithoutCartInputObjectSchema)])
}).strict();
export const CartItemUpdateManyWithWhereWithoutCartInputObjectSchema = makeSchema();
export const CartItemUpdateManyWithWhereWithoutCartInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemUpdateManyWithWhereWithoutCartInput.schema.js.map