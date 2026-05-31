import * as z from 'zod';
import { CartItemCreateNestedManyWithoutCartInputObjectSchema as CartItemCreateNestedManyWithoutCartInputObjectSchema } from './CartItemCreateNestedManyWithoutCartInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    couponCode: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    items: z.lazy(() => CartItemCreateNestedManyWithoutCartInputObjectSchema).optional()
}).strict();
export const CartCreateWithoutUserInputObjectSchema = makeSchema();
export const CartCreateWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartCreateWithoutUserInput.schema.js.map