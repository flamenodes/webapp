import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const DiscountWhereUniqueInputObjectSchema = makeSchema();
export const DiscountWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountWhereUniqueInput.schema.js.map