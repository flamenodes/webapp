import * as z from 'zod';
import { CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema as CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutCartInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    couponCode: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema).optional()
}).strict();
export const CartUncheckedCreateWithoutUserInputObjectSchema = makeSchema();
export const CartUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartUncheckedCreateWithoutUserInput.schema.js.map