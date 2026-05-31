import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const CartItemWhereUniqueInputObjectSchema = makeSchema();
export const CartItemWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemWhereUniqueInput.schema.js.map