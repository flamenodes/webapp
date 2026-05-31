import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const OrderWhereUniqueInputObjectSchema = makeSchema();
export const OrderWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderWhereUniqueInput.schema.js.map