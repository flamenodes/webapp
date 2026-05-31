import * as z from 'zod';
import { UserCreateNestedOneWithoutCartInputObjectSchema as UserCreateNestedOneWithoutCartInputObjectSchema } from './UserCreateNestedOneWithoutCartInput.schema';
import { CartItemCreateNestedManyWithoutCartInputObjectSchema as CartItemCreateNestedManyWithoutCartInputObjectSchema } from './CartItemCreateNestedManyWithoutCartInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    couponCode: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutCartInputObjectSchema),
    items: z.lazy(() => CartItemCreateNestedManyWithoutCartInputObjectSchema).optional()
}).strict();
export const CartCreateInputObjectSchema = makeSchema();
export const CartCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartCreateInput.schema.js.map