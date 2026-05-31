import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    label: z.string(),
    percentage: z.number().int()
}).strict();
export const DiscountCreateWithoutProductInputObjectSchema = makeSchema();
export const DiscountCreateWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountCreateWithoutProductInput.schema.js.map