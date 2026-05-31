import * as z from 'zod';
import { CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema as CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutCartInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string(),
    couponCode: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema).optional()
}).strict();
export const CartUncheckedCreateInputObjectSchema = makeSchema();
export const CartUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartUncheckedCreateInput.schema.js.map