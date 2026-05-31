import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string(),
    couponCode: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const CartCreateManyInputObjectSchema = makeSchema();
export const CartCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartCreateManyInput.schema.js.map