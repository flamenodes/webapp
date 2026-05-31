import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string().optional()
}).strict();
export const CartWhereUniqueInputObjectSchema = makeSchema();
export const CartWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartWhereUniqueInput.schema.js.map