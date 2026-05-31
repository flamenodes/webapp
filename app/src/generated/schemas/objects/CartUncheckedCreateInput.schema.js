import * as z from 'zod';
import { CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema as CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutCartInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string(),
    couponCode: z.string().optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
    items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema).optional()
}).strict();
export const CartUncheckedCreateInputObjectSchema = makeSchema();
export const CartUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartUncheckedCreateInput.schema.js.map