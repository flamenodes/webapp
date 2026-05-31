import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    label: z.string(),
    percentage: z.number().int()
}).strict();
export const DiscountCreateManyInputObjectSchema = makeSchema();
export const DiscountCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountCreateManyInput.schema.js.map