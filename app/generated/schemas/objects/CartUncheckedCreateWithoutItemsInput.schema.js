import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string(),
    couponCode: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const CartUncheckedCreateWithoutItemsInputObjectSchema = makeSchema();
export const CartUncheckedCreateWithoutItemsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartUncheckedCreateWithoutItemsInput.schema.js.map