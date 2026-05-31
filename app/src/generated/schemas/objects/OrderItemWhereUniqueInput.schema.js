import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const OrderItemWhereUniqueInputObjectSchema = makeSchema();
export const OrderItemWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemWhereUniqueInput.schema.js.map